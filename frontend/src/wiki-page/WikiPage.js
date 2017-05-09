import React from 'react';
import * as ReactRedux from 'react-redux';
import * as actions from './WikiPage.actions';

function wikiLinkify(contents) {
    return contents.replace(/([A-Z][a-z]+){2,}/g, function(match) {
        return `<a href="#/page/${match}">${match}</a>`;
    });
}

class WikiPage extends React.Component {

    componentDidMount() {
        this.props.fetchPage(this.props.params.title)
    }

    componentWillReceiveProps(newProps) {
        if (this.props.params.title !== newProps.params.title) {
            this.props.fetchPage(newProps.params.title);
        }
    }

    render() {

        let html = wikiLinkify(this.props.content);
        return (
            <div className="wiki">
                <h1>{this.props.params.title}</h1>

                {this.props.editing ?
                    <div>
                        <textarea onChange={(event) => this.props.typing(event)} rows="15" cols="80">{this.props.content}</textarea><br />
                        <button className="btn btn-info" onClick={()=> this.props.updatePage(this.props.params.title, this.props.content)}>Save</button>
                    </div> :

                    <div>
                        <p dangerouslySetInnerHTML={{__html: html}}></p>
                        <button className="btn btn-info" onClick={()=> this.props.toggleEdit()}>Edit</button>
                    </div>}

            </div>

        );
    }
}

const WikiPageContainer = ReactRedux.connect(
    state => state.wiki,
    actions
)(WikiPage);

export default WikiPageContainer;
