// import React from 'react';
import '../../App.css';
import React, { Component } from 'react';

class Letter extends Component {
    render() {
        return (
            <div className="leaf-outer">

                <div className="leaf">
                    <div>
                    <h1 className="leaf-title">{this.props.title}</h1>
                    <p className="leaf-text">
                        {this.props.text}
                    </p>
                    </div>
                    
                    <div className="pl-50">
                    <img className="leaf-image" src={this.props.image}></img>
                    {this.props.imageCaption &&
                    <p className="leaf-text leaf-text-caption">{this.props.imageCaption}</p>
                    }
                    </div>
                    
                </div>
                
                
            </div>    
        );
    }
}

export default Letter;