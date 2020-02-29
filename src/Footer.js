import React, {Component} from 'react';
import './App.css';

class Footer extends Component {
    render() {
        return (
            <body className="footer">
                <div>
                    <div>
                    <i className="fab fa-linkedin-in"></i>
                        <a target="blank" href="https://www.linkedin.com/in/yeri-kim">https://www.linkedin.com/in/yeri-kim</a>
                    </div>
                    <div>
                        <i className="fab fa-github"></i>
                        <a target="blank" href="https://www.github.com/4yerik">https://www.github.com/4yerik</a>
                    </div>
                </div>
                
                <p>Copyright © 2020 Yeri Kim</p>
            </body>

            
        );
    }
}

export default Footer;

