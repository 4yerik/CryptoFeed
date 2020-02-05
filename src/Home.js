import React, {Component} from 'react';
import './App.css'

class Home extends Component {

    render() {
        var i = 0;
        var txt = "Hi, I'm Yeri."; /* The text */
        var speed = 100; /* The speed/duration of the effect in milliseconds */

        function typeWriter() {
            if (i < txt.length) {
                document.getElementById("title").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }


        return (
            <div>
               <h1 id="title">HERE</h1>
                <section id="" className="main grid">
                </section>
                
                <section className="">
                </section>

                <h1>Today is a spectacular day, one I have never seen before</h1>

                <section>
                    <div>
                        <p>
                            I am a second year Computer Science student at the University of Waterloo. 
                            Currently, I am working as a Software Developer at The Cooperators. 
                        </p>
                        <p>

                        </p>

                        <img className="whole" src="https://4yerik.github.io/src/images/other/awardDinner.png"/>

                        <div className="pb-25">
                    </div>
                    </div>
                </section>

                

                

            </div>
            
        );
    }
}




export default Home;