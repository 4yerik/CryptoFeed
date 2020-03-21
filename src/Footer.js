import React, { Component } from 'react';
import './App.css';

class Footer extends Component {
    render() {
        return (
            <body className="footer">
                <div>
                    <div>
                        <a target="blank" aria-label="external link to Yeri Kim's linkedin profile" href="https://www.linkedin.com/in/yeri-kim">
                        <i className="fa fa-linkedin-in"></i>
                        </a>
                    </div>

                    <div>
                        
                        <a target="blank" aria-label="external link to Yeri Kim's github profile" href="https://www.github.com/4yerik">
                        <i className="fa fa-github"></i>
                            </a>
                    </div>
                </div>

                <p>Copyright © 2020 Yeri Kim</p>
            </body>


        );
    }
}

export default Footer;

