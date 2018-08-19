import React from 'react';
import './panel.css';

var FontAwesome = require('react-fontawesome')

export default class ListPanel extends React.Component {
    render() {
        const items = this.props.items.map((x) => <li>{x}</li>);
        console.log(items)
        return (
            <div className="listPanel" style={{backgroundColor: this.props.backgroundColor}}>
                <FontAwesome name={this.props.fa} size="5x"/>
                <h2>{this.props.title}</h2>
                <ul>{items}</ul>
            </div>
        );
    }
}