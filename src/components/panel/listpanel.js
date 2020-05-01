import React from 'react';
import './panel.css';

var FontAwesome = require('react-fontawesome')

export default class ListPanel extends React.Component {
    render() {
        const items = this.props.items.map((x) => <div key={x}><li style={{color: this.props.textColor}} key={x}>{x}</li><br/></div>);
        return (
            <div className={`panel ${this.props.boxShade}`} 
                style={{
                    backgroundColor: this.props.backgroundColor,
                    backgroundImage: `url(${this.props.backgroundImage})`}}>
                <FontAwesome style={{color: this.props.faColor}} name={this.props.fa} size="5x"/>
                <h2 style={{color: this.props.headingColor}}>{this.props.title}</h2>
                <ul className={this.props.alignment ? "listpanel-" + this.props.alignment : "listpanelitem-center"}>{items}</ul>
            </div>
        );
    }
}