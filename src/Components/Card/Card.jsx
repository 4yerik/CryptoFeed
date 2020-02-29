// import React from 'react';
import '../../App.css';
import React, {Component} from 'react';

class Card extends Component {
    render() {
        return (
            (this.props.type === "regular") ? 

            <div className="card">
                <h1>{this.props.title}</h1>
                <h2>{this.props.role}</h2>
                {/* <h3>{this.props.period}</h3> */}

                {/* <h2 style={{color: this.props.color}}></h2> */}
                <div className="panel">
                    <div className="info">{this.props.mission}</div>
                    <div className="info">{this.props.textCenter}</div>
                    <div className="info">{this.props.textRight}</div>
                
                </div>

                <div className="panel">
                    <div className="info-pic">{this.props.pictureOne}</div>
                    <div className="info-pic">{this.props.pictureTwo}</div>
                    <div className="info-pic">{this.props.pictureThree}</div>
                
                </div>
                
                
            </div> : 
            <div className="card">
                <h1>{this.props.title}</h1>
                <h2>{this.props.role}</h2>
                <h3>{this.props.period}</h3>
                <p>{this.props.mission}</p>

                {/* <h2 style={{color: this.props.color}}></h2> */}
                <div className="panel">
                    <div className="info">{this.props.textOne}</div>
                    <div className="info">{this.props.textTwo}</div>
                    <div className="info">{this.props.textThree}</div>
                
                </div>

            </div>
        
        
            
        );
    }
}

export default Card;