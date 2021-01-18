import React, { Component } from 'react';
import '../App.css';
import Clock from '../Components/Clock.jsx'


class Footer extends Component {
    render() {
        return (
            <body className="footer">
                <Clock></Clock>
            </body>
        );
    }
}

export default Footer;

