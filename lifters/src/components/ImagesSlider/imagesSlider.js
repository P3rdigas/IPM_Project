import React, { useState } from 'react'

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { BsCircleFill, BsCircle } from "react-icons/bs";

function ImagesSlider({slides}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const sliderStyles = {
        height: "100%",
        position: "relative"
    };
    
    const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    };
    
    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer"
    };
    
    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].url})`
    };
    
    const dotsContainerStyles = {
        display: "flex",
        justifyContent: "center",
        paddingTop: "5px"
    }
    
    const dotStyles = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "12px"
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    
    return(
        <div style={sliderStyles}>
            <MdArrowBackIos style={leftArrowStyles} onClick={goToPrevious}/>
            <MdArrowForwardIos style={rightArrowStyles} onClick={goToNext}/>
            <div style={slideStyles}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>
                    {slideIndex === currentIndex ? <BsCircle /> : <BsCircleFill />}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImagesSlider;