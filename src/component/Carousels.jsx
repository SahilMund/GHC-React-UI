import React from 'react'
import {Carousel} from 'react-responsive-carousel'


import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import "../styles/Carousel.css";
import { Carousel1, Carousel2 } from '../static';

function Carousels() {
  return (
    <div className='carousel'>
        <div className='trackers'>
            <span>view all trackers</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
            <path d="M0 11.4725L4.94467 6.5L0 1.5275L1.52227 0L8 6.5L1.52227 13L0 11.4725Z" fill="white"/>
            </svg>

        </div>
        <Carousel>
          
            <div className='imgDiv'>
              <img className='carouselImg' src={Carousel1} alt=''  />  
            </div>
            <div className='imgDiv'>
              <img className='carouselImg' src={Carousel2} alt='' />  
            </div>
          
        </Carousel>
    </div>
  )
}

export default Carousels;