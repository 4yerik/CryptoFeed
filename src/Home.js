import React, { Component } from 'react';
import './App.css'
import Letter from './Components/Letter/Letter.jsx';


class Home extends Component {

    render() {

        const phrase = "REACT :)".split('');


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
                    {/* // image="https://github.com/4yerik/images/blob/master/family/senior.png?raw=true"

// image="https://github.com/4yerik/images/blob/master/family/montSutton.PNG?raw=true"


// image="https://github.com/4yerik/images/blob/master/family/gym.jpg?raw=true" */}
                </div>


            </div>

        );
    }
}




export default Home;