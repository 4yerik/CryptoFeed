// import React from 'react';
import '../App.css';
import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>

                <div className="row-flex">
                    <p>{this.props.avoid}</p>

                    <div className="col-100 col-lg-33">{this.props.mission}</div>
                    <div className="col-100 col-lg-33">{this.props.textCenter}</div>
                    <div className="col-100 col-lg-33">{this.props.textRight}</div>

                </div>
            </div>
        );
    }
}

export default Card;