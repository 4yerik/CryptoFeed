import React, { Component } from 'react';
import './App.css'
import Letter from './Components/Letter.jsx';


class Home extends Component {

    render() {

        const phrase = "YERI KIM".split('');


        return (
            <div className="main">

                <div className="board">
                    {phrase.map(letter => (
                        <Letter
                            value={letter}
                        />
                    ))
                    }
                </div>

                <p>
                    love snowboarding
                </p>


                    {/* // image="https://github.com/4yerik/images/blob/master/family/senior.png?raw=true"
// image="https://github.com/4yerik/images/blob/master/family/montSutton.PNG?raw=true"
// image="https://github.com/4yerik/images/blob/master/family/gym.jpg?raw=true" */}

            </div>

        );
    }
}




export default Home;