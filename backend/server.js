const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pgp = require('pg-promise')();
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const db = pgp({
  database: 'wiki_db'
});

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/pages', (req, resp, next) => {
  db.any('select * from page')
    .then(pages => resp.json(pages))
    .catch(next);
});

app.get('/api/page/:title', (req, resp, next) => {
  let title = req.params.title;
  db.oneOrNone('select * from page where title = $1', title)
    .then(page => {
      if (page === null) {
        resp.status(404); // 404 not found
        resp.json({
          message: 'Page not found'
        });
      } else {
        resp.json(page);
      }
    })
    .catch(next);
});

app.put('/api/page/:title', (req, resp, next) => {
  let title = req.params.title;
  let content = req.body.content;
  db.one(`
    insert into page values ($1, $2, now(), now())
    on conflict (title) do update
      set content = $2,
      time_modified = now()
    returning *
    `, [title, content])
    .then(page => resp.json(page))
    .catch(next);
});

// Login button click
app.post('/api/login', (req, resp, next) => {
    let email = req.body.email;
    let password = req.body.password;
    let username;
    db.one(`select * from users where email=$1`, email)
        .then(loginDetails => {
            username = loginDetails.username;
            return  bcrypt.compare(password, loginDetails.password);
        })
        .then(matched => {
            if (matched) {
                let token = uuid.v4();
                let data = {
                    token: token,
                    username: username
                }
                resp.json(data);
            }
        })
        .catch(next)
})

// Create account button click
app.post('/api/signup', (req, resp, next) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    bcrypt.hash(password, 10)
        .then(encrypted => {
            return db.one(`insert into users values (default, $1, $2, $3) returning username`, [email, encrypted, username]);
        })
        .then(username => {
            resp.json(username)
        })
    .catch(next)
})


app.use((err, req, resp, next) => {
  resp.status(500);
  resp.json({
    error: err.message,
    stack: err.stack.split('\n')
  });
});

app.listen(4000, () => {
  console.log('Listening on port 4000');
});
