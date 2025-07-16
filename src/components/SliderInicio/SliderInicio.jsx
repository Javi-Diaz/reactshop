import img1 from "../../assets/sliderInicio/1.jpg"
import img2 from "../../assets/sliderInicio/2.webp"
import img3 from "../../assets/sliderInicio/3.webp"
import "./SliderInicio.css"
import { useState } from "react"

function SliderInicio(){
    const [activeIndex, setActiveIndex] = useState(0)
    const [startX, setStartX] = useState(0);

    const handleMoverSlider = (index)=>{
        const box = document.querySelector(".sliderInicio-imgsBox")
        box.style.transform = `translateX(-${index * 100}%)`;
        setActiveIndex(index)
    }

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (diff > 50 && activeIndex < 2) {
          handleMoverSlider(activeIndex + 1); // swipe izquierda → siguiente
        } else if (diff < -50 && activeIndex > 0) {
          handleMoverSlider(activeIndex - 1); // swipe derecha → anterior
        }
      };

    return(
        <div className="sliderInicio"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <div className="sliderInicio-botonesBox">
                {[0,1,2].map((index)=>(
                    <button
                        key={index}
                        className="sliderInicio-botones"
                        style={{opacity: activeIndex === index ? "1" : "0.25"}}
                        onClick={()=>(handleMoverSlider(index))}
                    ></button>
                ))}
            </div>
            <div className="sliderInicio-imgsBox">
                <img className="sliderInicio-imgs" src={img1} alt="imagen-slider" />
                <img className="sliderInicio-imgs" src={img2} alt="imagen-slider" />
                <img className="sliderInicio-imgs" src={img3} alt="imagen-slider" />
            </div>
        </div>
        
    )
}

export default SliderInicio;