import React from 'react';
import './panel.css';

var FontAwesome = require('react-fontawesome')

export default class Panel extends React.Component {
    render() {
        if(this.props.fa !== undefined){
            return (
                <div className={`panel ${this.props.boxShade}`} 
                    style={{
                        backgroundColor: this.props.backgroundColor,
                        backgroundImage: `url(${this.props.backgroundImage})`}}>
                    <FontAwesome style={{color: this.props.faColor}} name={this.props.fa} size="5x"/>
                    <h2 style={{color: this.props.headingColor}}>{this.props.title}</h2>
                    <p style={{color: this.props.textColor}}>{this.props.text}</p>
                </div>
            );
        } else if (this.props.image !== undefined) {
            return (
                <div className={`panel ${this.props.boxShade}`} 
                    style={{
                        backgroundColor: this.props.backgroundColor,
                        backgroundImage: `url(${this.props.backgroundImage})`}}>
                    <img src={this.props.image}
                        alt={this.props.alt}
                        height="200px" width="200px"
                        style={{
                            border: "10px solid white",
                            boxShadow: "5px 5px 5px 5px rgba(40, 40, 40, 0.6)"}}/>
                    <h2 style={{color: this.props.headingColor}}>{this.props.title}</h2>
                    <p style={{color: this.props.textColor}}>{this.props.text}</p>
                </div>
            );
        }
        else {
            return (
                <div className={`panel ${this.props.boxShade}`}
                    style={{
                        backgroundColor: this.props.backgroundColor,
                        backgroundImage: `url(${this.props.backgroundImage})`}}>
                    <h2>{this.props.title}</h2>
                    <p>{this.props.text}</p>
                </div>
            );
        }
    }
}