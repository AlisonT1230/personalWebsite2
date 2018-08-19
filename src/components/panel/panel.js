import React from 'react';
import './panel.css';

export default class Panel extends React.Component {
    render() {
        return (
            <div className="panel" style={{backgroundColor: this.props.backgroundColor}}>
                <h2>{this.props.title}</h2>
                <p>{this.props.text}</p>
            </div>
        );
    }
}