import React from 'react';
import * as ReactRedux from 'react-redux';
import { Link } from 'react-router';

class Home extends React.Component {

    render() {
        return (
            <div>
                <img className="flamingo" src="/flamingo.png"></img>
                <h2 className="welcome">Welcome to AnimalWiki!</h2>
                <p>To get started take a look at some of the pages below. Feel free to edit any of these pages. Make new pages in the app by creating links in a page's content. To make a link just write any word in CamelCase. Then click that word and edit your new page!</p>
                <Link to="/page/FlamingoAnimal" activeClassName="active" className="link">Flamingo</Link>
                <Link to="/page/GiraffeAnimal" activeClassName="active" className="link">Giraffe</Link>
                <Link to="/page/KoalaAnimal" activeClassName="active" className="link">Koala</Link>
                <Link to="/page/ZebraAnimal" activeClassName="active" className="link">Zebra</Link>
            </div>
        )
    }
}

const HomeContainer = ReactRedux.connect(
    state => state.home
)(Home);

export default HomeContainer;
