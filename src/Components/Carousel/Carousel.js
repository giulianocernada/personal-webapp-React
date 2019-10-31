import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from '../../Assets/Main/BG.jpg';
import classes from './Carousel.css';

export default () => (
  <Carousel className={classes.Carousel} autoPlay>
    <div>
      <img className={classes.Image} alt='culo' src={Image} />
    </div>
    <div>
      <img className={classes.Image} alt='culo' src={Image} />
    </div>
  </Carousel>
);
