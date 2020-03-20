import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Clock from './Components/Clock/index.jsx'

const details = [
  {
    image: "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/virtual_console_nintendo_3ds_7/SI_3DSVC_SuperMarioBros.jpg",
    resolver: "(parent, args, context, info) => data",
    tricks: "pagination",
    name: "super mario bros"
  },
  {
    image: "https://www.thesprucepets.com/thmb/LPnj-N-AcGdZRvf7E6y_Hsf2vqo=/4089x2300/smart/filters:no_upscale()/close-up-of-a-hamster-eating-groundnut-635096689-5c525f88c9e77c0001d7c1fa.jpg",
    resolver: "(parent, args, context, info) => data",
    tricks: "pagination",
    name: "identity"
  },
  {
    image: "https://github.com/4yerik/images/blob/master/projects/website.PNG?raw=true",
    name: "nothing"
  }

];

const Projects = () => (
  <div>
    {details.map(detail => (
      <div className="project">
        <Carousel useKeyboardArrows={true} dynamicHeight={true} showStatus={false} infiniteLoop={true}>
                <div>
                    <p className="legend">{detail.name}</p>
                    <img className="project-image" src={detail.image}></img>
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

            <Clock></Clock>
      </div>
    ))
    }
  </div>
);

export default Projects;