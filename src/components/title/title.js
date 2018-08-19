import React from 'react';
import './title.css';

class Title extends React.Component {
    render() {
        return (
            <div className="title">
                <h1>{this.props.text}</h1>
                <p>{this.props.subtext}</p>
            </div>
        );
    }
}

export default Title;