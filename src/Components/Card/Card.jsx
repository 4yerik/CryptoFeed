// import React from 'react';
import '../../App.css';
import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <h1>{this.props.title}</h1>
                <h2>{this.props.role}</h2>
                <p>{this.props.mission}</p>

                {/* <h2 style={{color: this.props.color}}></h2> */}
                <div className="panel">
                    <div className="info">{this.props.textOne}</div>
                    <div className="info">{this.props.textTwo}</div>
                    <div className="info">{this.props.textThree}</div>
                
                </div>

                <div className="panel">
                    <div className="info">{this.props.textFour}</div>
                    <div className="info">{this.props.textFive}</div>
                    <div className="info">{this.props.textSix}</div>
                
                </div>
                
                
            </div>
            
        );
    }
}

export default Card;