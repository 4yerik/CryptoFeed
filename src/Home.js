import React, { Component } from 'react';
import './App.css'
import Letter from './Components/Letter/Letter.jsx';


class Home extends Component {

    render() {

        const phrase = "TODAY IS A*WONDERFUL DAY|ONE I HAVE*NEVER SEEN :)".split('');


        return (
            <div>

                <div className="board">
                    {phrase.map(letter => (
                        <Letter
                            value={letter}
                        />
                    ))
                    }
                </div>

                <div>
                    <div>React</div>
                    <div>GraphQL</div>
                </div>


            </div>

        );
    }
}




export default Home;