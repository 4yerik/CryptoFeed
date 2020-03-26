// import React from 'react';
import './App.css';
import React, { Component } from 'react';
import Card from './Components/Card.jsx';
import { isDeclareTypeAlias } from '@babel/types';

class Experience extends Component {



    render() {

        const prodigyImage = "https://4yerik.github.io/src/images/prodigy/prodigyLogo.png";
        const details = [
            {
                title: "The Cooperators",
                role: "Software Developer",
                type: "short",
                textOne: "The Cooperators is a Canadian insurance company based in Guelph, Ontario. It was founded in 1945 and currently has more than 4000 employees.",
                textTwo: "From January 2020 to April 2020, I added a section for claim updates and a file upload dropzone to the website. This was done with the goal of reducing calls to the call centre.",
                textThree: "I used React hooks to improve code readability and efficiency. In addition, I followed accessibility best practices with aria, tabindex and role attributes.",
            },
            {
                title: "Prodigy",
                role: "Automation Engineer",
                period: "May 2019 - August 2019",
                mission: "Prodigy is an education startup that was founded in 2010 and is currently one of Canada's fastest growing startups. Prodigy's mission is to help every student in the world love learning.",
                type: "regular",
                textCenter: "At Prodigy, I learned the best practices around testing and used that knowledge to write end to end automation tests with Cypress." + 
                "In addition to writing automation tests, I had the opportunity work on developing Prodigy's homepage redesign. " +
                "It makes me proud to think that millions of people get to see my work every month.",
                textRight: "In my last few weeks at Prodigy, I worked on developing a Bash script that detects new tests and confirms the tests are stable in the production pipeline. " + 
                "Many of the existing automation tests were flaky, meaning that they sometimes failed and later passed with the same code. " + 
                "This inconsistency caused developers to doubt the validity of a failed test and wasted time with reruns.",
                pictureOne: <img src="https://github.com/4yerik/images/blob/master/prodigy/teamLunch.jpg?raw=true"></img>,
                pictureTwo: <img src="https://github.com/4yerik/images/blob/master/prodigy/prodigyLogo.png?raw=true"></img>,
                pictureThree: <img src="https://github.com/4yerik/images/blob/master/prodigy/lastDay.jpg?raw=true"></img>,
            },

            {
                title: "Private Math Tutor",
                role: "",
                period: "October 2014 - June 2019",
                type: "short",
                textOne: "Thank you so much. I'm going to miss you so much next year. You helped me more than my own teacher. - Sage",
                textTwo: "Thank you for helping us over the past three years. We wish you all the best. - Evlin, George and Julia's mom",
                textThree: "Thank you so much for helping Dylan, you were such a big help to him. - Laura and Troy, Dylan's Parents",
            },

            {
                title: "Canterbury",
                role: "Overnight Camp Leader",
                period: "May 2018 - August 2018",
                mission: "Canterbury Hills is a camp located in Ancaster, ON that has been operating since 1960. Every week, I was assigned to a new group of campers in a specific age group. Each week was a little different, but in general I led classic camp activities such as archery, rock climbing, high ropes, campfires, and hiking.",
                type: "regular",
                textCenter: "Working at Canterbury was great leadership experience and a true test of my ability as a role model. " +
                    "In my opinion, summer camp is all about having fun and building character. " +
                    "It was very heartwarming to see campers gain self confidence and develop friendships. " + 
                    "I am proud that my group won cabin cup twice over the summer for being the best example of collaboration and enthusiasm" + 
                    "I.",
                textRight: "Despite 80 hour work weeks, the campers made the summer of 2018 a fulfilling one. " +
                    "At overnight camp, you get to know your campers quickly because you see them from the moment you wake up to just before they fall asleep. " +
                    "Some of my youngest campers suprised me with how independent they were, while other campers suprised me with their ability to empathize",
                pictureOne: <img src="https://github.com/4yerik/images/blob/master/canterbury/WeekThreeCanterbury.PNG?raw=true"></img>,
                pictureTwo: <img src="https://github.com/4yerik/images/blob/master/canterbury/StoneWall.jpg?raw=true"></img>,
                pictureThree: <img src="https://github.com/4yerik/images/blob/master/canterbury/WeekSevenCanterbury.PNG?raw=true"></img>,
            },

            {
                title: "Hamilton Wentworth District School Board",
                role: "Summer Camp Counsellor",
                period: "July 2016 - August 2016",
                textOne: "Focus on Youth is a partnership between HWDSB and non-profit organizations that supports inner cities in delivering free or low-cost summer programs and activities.",
                type: "short",
                textTwo: "During the summer of 2016, I was selected to be part of HWDSB's Focus on Youth staff. I was placed at Bennetto Elementary school where I helped YMCA supervise roughly 40 campers.",
                textThree: " I engaged campers in activities such as basketball, dodgeball, swimming, and crafts. In addition, I promoted the literacy program by helping campers learn how to read.",
            }

        ];


        return (
            <div>
                {details.map(detail => (
                    // {console.log(detail)}
                    <Card
                        type={detail.type}
                        title={detail.title}
                        role={detail.role}
                        period={detail.period}
                        mission={detail.mission}
                        textCenter={detail.textCenter}
                        textRight={detail.textRight}
                        pictureOne={detail.pictureOne}
                        pictureTwo={detail.pictureTwo}
                        pictureThree={detail.pictureThree}
                        textOne={detail.textOne}
                        textTwo={detail.textTwo}
                        textThree={detail.textThree}
                    />
                ))
                }
            </div>

        );
    }
}

export default Experience;