import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/download (16).jpeg'
import img2 from '../../assets/download (17).jpeg'
import img3 from '../../assets/download (18).jpeg'
import img4 from '../../assets/download (19).jpeg'
import img5 from '../../assets/download (20).jpeg'
import img6 from '../../assets/download (21).jpeg'
import "../../App.css";

const Banner = () => {
    return (
        <div className="h-[500px]">
          <Carousel 
            showThumbs={true} 
            autoPlay 
            infiniteLoop 
            interval={3000} 
            showStatus={false}
            className="h-[430px]"
          >
            <div className="h-[430px]">
              <img className="h-full" src={img1} alt="Slide 1" />
              <p className="legend">Slide 1</p>
            </div>
            <div className="h-[430px]">
              <img className="h-full" src={img2} alt="Slide 2" />
              <p className="legend">Slide 2</p>
            </div>
            <div className="h-[430px]">
              <img className="h-full" src={img3} alt="Slide 3" />
              <p className="legend">Slide 3</p>
            </div>
            <div className="h-[430px]">
              <img className="h-full" src={img4} alt="Slide 4" />
              <p className="legend">Slide 4</p>
            </div>
            <div className="h-[430px]">
              <img className="h-full" src={img5} alt="Slide 5" />
              <p className="legend">Slide 5</p>
            </div>
            <div className="h-[430px]">
              <img className="h-full" src={img6} alt="Slide 6" />
              <p className="legend">Slide 6</p>
            </div>
          </Carousel>
        </div>
      );
};
export default Banner;