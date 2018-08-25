import React from 'react';
import './panel.css';

var FontAwesome = require('react-fontawesome')

export default class Panel extends React.Component {
    render() {
        if(this.props.fa === undefined){
            return (
                <div className="panel" style={{backgroundColor: this.props.backgroundColor}}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
            );
        } else {
            return (
                <div className="panel" style={{backgroundColor: this.props.backgroundColor}}>
                    <FontAwesome name={this.props.fa} size="5x"/>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
            );
        }
    }
}