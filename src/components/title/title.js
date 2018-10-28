import React from 'react';
import './title.css';

var FontAwesome = require('react-fontawesome')

class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>{this.props.text}</h1>
                <p>{this.props.subtext}</p>
                <div id="logoLinks">
                    <a href={this.props.linkedin} target="_blank"><FontAwesome className="fa" name={"linkedin-square"} size="2x"/></a>
                    <a href={this.props.github} target="_blank"><FontAwesome className="fa" name={"github"} size="2x"/></a>
                </div>                
            </div>
        );
    }
}

export default Title;