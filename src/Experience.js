// import React from 'react';
import './App.css';
import React, {Component} from 'react';
import Card from './Components/Card/Card.jsx';

class Experience extends Component {
    
    render() {
        const prodigyTitle = "Prodigy";
        const prodigyRole = "Test Automation Engineer";
        const prodigyMission = "Prodigy is an education startup that was founded in 2010 by two waterloo alumni, Alexander Peters and Rohan Mahimker. The company currently has over 300 employees and is one of Canada's fastest growing startups. Prodigy's mission is to help every student in the world love learning.";
        const prodigyTextOne = "A lot of Prodigy's structure was inspired by Spotify. This includes daily standups and team sizes that are no bigger than the \"2 pizza rule\". Every tech team at Prodigy includes a mix of fullstack developers, quality assurance engineers, a designer, and a product manager. ";
        const prodigyTextTwo = "At Prodigy, I learned the best practices around testing and used that knowledge to write end to end automation tests with Cypress.";
        const prodigyImage= "https://4yerik.github.io/src/images/prodigy/prodigyLogo.png";

        const mathTitle = "Private Math Tutor";
        const mathRole = ""
        const mathMission = "I spent roughly 800-900 hours tutoring math to more than 30 elementary and highschool students. I was first approached and asked to tutor math in Grade 9. I agreed and enjoyed it so much that I found more students to tutor the following year. My favourite areas to teach were functions, data management, calculus, and algebra. ";
        const mathTextOne="Thank you so much. I'm going to miss you so much next year. You helped me more than my own teacher. - Sage (Grade 10)"
        const mathTextTwo = "Thank you for helping us over the past three years. We wish you all the best. - Evlin, George and Julia's mom";
        const mathTextThree ="Thank you so much for helping Dylan, you were such a big help to him. - Laura and Troy, Dylan's Parents"
        const canterburyTitle = "Canterbury";
        const canterburyRole = "Test Automation Engineer";
        const canterburyText = "Yes Yes";
        return (
            <div>
                <Card 
                    title={prodigyTitle}
                    role={prodigyRole}
                    mission={prodigyMission}
                    textOne={prodigyTextOne}
                    textTwo={prodigyTextTwo}
                    imgSrc={prodigyImage}
                />

                <Card 
                    title={mathTitle}
                    role={mathRole}
                    mission={mathMission}
                    textOne={mathTextOne}
                    textTwo={mathTextTwo}
                    textThree={mathTextThree}
                />

                <Card 
                    title={canterburyTitle}
                    role={canterburyRole}
                    text={canterburyText}
                />

                <section id="work">
                    <section id="prodigy" className="pt-25 pb-25">
                        <div className="grid">
                            <div className="whole text">
                                <a href="https://prodigygame.com" target="blank">
                                    <img className="logo-size" src="https://4yerik.github.io/src/images/prodigy/prodigyLogo.png"/>
                                </a>
                                <h2 className="title">Prodigy</h2>
                                <h3>Test Automation Engineer</h3>
                                
                            </div>
                        </div>

                        <div className="grid">
                            <div className="whole text pb-25">
                                <p>
                                
                                </p>

                                <p>Radical Candor, the ability to be direct</p>
                                <p>Extreme Ownership, the commitment to projects</p>
                                <p>Growth Mindset, the willingness to learn</p>
                                <p>User Obsessed, to prioritize the needs of the user</p>
                            </div>   
                        </div>
                        <div className="grid">
                            <img className="square left border" src="https://4yerik.github.io/src/images/prodigy/teamLunch.jpg"/>
                            <div className="right text pl-25">
                                <p>
                                    
                                </p>
                                <p>
                                    
                                </p>

                                <p>
                                    In addition to writing automation tests, I had the opportunity to write code for Prodigy's 
                                    homepage redesign. I used HTML and PHP to add content such as images, icons, and text. I also 
                                    used SCSS to align content and make elements responsive. It makes me proud to think that millions 
                                    of people get to see what is partly my work every month.
                                </p>
                            </div>
                        </div>

                        <div className="grid"> 
                            <div className="text left pr-25">
                                <p>
                                    In my last few weeks at Prodigy, I worked on developing a Bash script that detects new tests 
                                    and confirms the tests are stable in the production pipeline. Many of the existing automation 
                                    tests were flaky, meaning that they sometimes failed and later passed with the same functional 
                                    code. This inconsistency caused developers to doubt the validity of a failed test and wasted 
                                    time with reruns. My manager had the idea from Netflix's automation team to run new tests 
                                    in a loop and only add them to the official test suite if they pass at a stable rate. 
                                </p>
                                <p>
                                    During my four months at Prodigy, I looked forward to going to work every morning. My coworkers  
                                    were both very friendly and funny.
                                </p>
                                <br></br>
                                <p>May 2019 - August 2019</p>
                            </div>
                            <img className="square right border" src="https://4yerik.github.io/src/images/prodigy/lastDay.jpg"/>
                        </div>
                    </section>

                    <section id="tutoring" className="grid pt-25 pb-25">
                        <div className="whole">
                            <h2 className="title">Private Math Tutor</h2>
                            <p className="text pb-25">
                                
                            </p>
                            
                        </div>
                        
                        
                        </section>
                    </section>
                    
                    
                    
                    <section id="canterbury" className="pt-25 pb-25">
                        <div className="grid">
                            <div className="left text pr-25">
                                <h2 className="title">Canterbury Hills Camp</h2>
                                <h3>Overnight Camp Leader</h3>
                                <p>
                                    <a href="https://canterburyhillscamp.ca/about" target="blank">Canterbury Hills</a>&nbsp;
                                    is a camp located in Ancaster, ON that has been operating since 1960. 
                                    Every week, I was assigned to a new group of campers 
                                    in a specific age group. Each week was a little different, but in general 
                                    I led classic camp activities 
                                    such as archery, rock climbing, high ropes, campfires, and hiking. 
                                </p>
                                <p>
                                    Furthermore, I made up games and challenges to keep campers engaged and laughing. 
                                    An example of a challenge was seeing who could stand underneath a cold waterfall the longest. 
                                </p>
                            </div>
                            <img className="square right border" src="https://4yerik.github.io/src/images/canterbury/o7.PNG"/>
                        </div>


                        <div className="grid">
                            <img className="square left rotate180 border" src="https://4yerik.github.io/src/images/canterbury/o3.jpg"/>
                            <div className="right text pl-25">
                                <p>
                                    In addition to my core responsibilites, I also provided 1 : 1 support to campers with autism. 
                                    Although it was quite challenging, the experience developed my maturity and patience. 
                                    
                                </p>

                                <p>
                                    At an overnight camp, you get to know your campers really quickly because you see them 
                                    from the moment you wake up to just before they fall asleep. 
                                    Some of my youngest campers suprised me with how independent they were, 
                                    while other campers suprised me with their athletic talents. 
                                </p> 
                                <p>
                                    It was really heartwarming to see campers gain self confidence and develop friendships. 
                                    With the oldest group of girls, it even felt like I was developing friendships with the campers. 
                                </p>
                                <p>
                                    I'm proud to say that my group of campers won cabin cup on two 
                                    occassions for being the best example of collaboaration, kindness, 
                                    and enthusiasm. 
                                </p>
                                
                            </div>
                        </div>


                        <div className="grid">

                            <div className="left text pr-25">
                                <p>
                                    Working as a overnight camp leader involved long hours (~80 / week) but the 
                                    energy from the campers made it worth it. 
                                    The motto of Canterbury is "Forever memories are made here" and I can definetely say 
                                    that I made many fond memories from my two months there.
                                </p>

                                <p>
                                    It was a wonderful leadership experience and a pleasure to be a role model for 
                                    so many young individuals. 
                                </p>
                            </div>
                            <img className="square right border" src="https://4yerik.github.io/src/images/canterbury/more.PNG"/>
                        </div>
                    </section>


                    <section className="grid pt-25 pb-25" id="HWDSB">
                        <div className="whole">
                            <h3>Hamilton Wentworth District School Board</h3>
                            <h4>Summer Camp Counsellor</h4>
                            <p>
                                During the summer of 2016, I was selected to be part of HWDSB's Focus on Youth staff. Focus 
                                on Youth is a partnership between HWDSB and non-profit organizations that supports inner 
                                cities in delivering free or low-cost summer programs and activities.
                            </p>
                            <p>
                                I was placed at Bennetto Elementary school where I helped YMCA supervise roughly 
                                40 campers. I engaged campers in activities such as basketball, dodgeball, swimming, 
                                crafts and reading.
                            </p>
                        </div>
                    </section>
            </div>
            
        );
    }
}

export default Experience;