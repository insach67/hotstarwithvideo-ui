import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import { SliderData } from "./SliderData";
import { Link } from "react-router-dom";
import Moviecard from "./moviescard/Moviecard";
import "./slider.css"
function Slides() {
  return (
   
    <div className="container">
      <div className="slide-container">
        <Slide>
          {SliderData.map((slide, index) => {
            return (
              <Link to={`/movie/${slide.title}/${slide.id}`} key={index}>
              <div className="slider">
                <div className="slide-content">
                  <h4 className="movie-title">{slide.title}</h4>
                  <p className="movie-des">{slide.description}</p>
                    
                  <h4 className="movie-watch">{slide.watch}
                  </h4>
                  
                </div>
               
                <img src={slide.image} alt="" />
              </div>
              </Link>
            );
          })}
        </Slide>
      </div>
      <Moviecard/>
    </div>
   
  );
}

export default Slides;
