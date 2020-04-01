// import React from 'react';
import '../App.css';
import React, { Component } from 'react';

class Letter extends Component {
    render() {
        return (
            (this.props.value === " ") ?
                <div className="space letter">{this.props.value}</div>
                :
                <div className="letter">{this.props.value}</div>
                
        );
    }
}

export default Letter;