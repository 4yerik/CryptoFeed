import React, { Profiler } from 'react';
import '../App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const details = [
  {
    image: "https://www.thesprucepets.com/thmb/LPnj-N-AcGdZRvf7E6y_Hsf2vqo=/4089x2300/smart/filters:no_upscale()/close-up-of-a-hamster-eating-groundnut-635096689-5c525f88c9e77c0001d7c1fa.jpg",
    name: "identity"
  },
  {
    image: "https://github.com/4yerik/images/blob/master/projects/website.PNG?raw=true",
    name: "nothing"
  }

];

const callback = (id, phase, actualTime, baseTime, startTime, commitTime) => {
  // console.log(`${id}'s ${phase} phase:`);
  // console.log(`Actual time: ${actualTime}`);
  // console.log(`Base time: ${baseTime}`);
  // console.log(`Start time: ${startTime}`);
  // console.log(`Commit time: ${commitTime}`);
};

const Summary = () => (
  <div>
    <h2>Needs more...</h2>
    <h2>Health implications...</h2>
    <h2>Simple tradeoffs...</h2>

    {details.map(detail => (
      // <Profiler id="project-page" >
      <div id="project-page" className="project">
        <Carousel showThumbs={false} useKeyboardArrows={true} dynamicHeight={true} showStatus={false} infiniteLoop={true}>
          <div>
            <p className="legend">{detail.name}</p>
            <img className="project-image" src={detail.image}></img>
          </div>
          <div>
            <img src="https://www.thesprucepets.com/thmb/LPnj-N-AcGdZRvf7E6y_Hsf2vqo=/4089x2300/smart/filters:no_upscale()/close-up-of-a-hamster-eating-groundnut-635096689-5c525f88c9e77c0001d7c1fa.jpg"></img>
            <p className="legend">Legend 2</p>
          </div>
        </Carousel>


      </div>
      // </Profiler>
    ))
    }
  </div>
);

export default Summary;