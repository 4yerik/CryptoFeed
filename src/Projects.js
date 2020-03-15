import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const details = [
  {
    value: "yes"
  },

];

const Projects = () => (
  <div>
    {details.map(detail => (
      <div className="project">
        <Carousel useKeyboardArrows={true}>
                <div>
                    <img src="https://www.thesprucepets.com/thmb/LPnj-N-AcGdZRvf7E6y_Hsf2vqo=/4089x2300/smart/filters:no_upscale()/close-up-of-a-hamster-eating-groundnut-635096689-5c525f88c9e77c0001d7c1fa.jpg"></img>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.thesprucepets.com/thmb/LPnj-N-AcGdZRvf7E6y_Hsf2vqo=/4089x2300/smart/filters:no_upscale()/close-up-of-a-hamster-eating-groundnut-635096689-5c525f88c9e77c0001d7c1fa.jpg"></img>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.thesprucepets.com/thmb/LPnj-N-AcGdZRvf7E6y_Hsf2vqo=/4089x2300/smart/filters:no_upscale()/close-up-of-a-hamster-eating-groundnut-635096689-5c525f88c9e77c0001d7c1fa.jpg"></img>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      </div>
    ))
    }
  </div>
);

export default Projects;