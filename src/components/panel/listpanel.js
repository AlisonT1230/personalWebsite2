import React from 'react';
import './panel.css';

export default class ListPanel extends React.Component {
    render() {
        const items = this.props.items.map((x) => <li>{x}</li>);
        console.log(items)
        return (
            <div className="listPanel" style={{backgroundColor: this.props.backgroundColor}}>
                <h2>{this.props.title}</h2>
                <ul>{items}</ul>
            </div>
        );
    }
}