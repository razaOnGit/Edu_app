import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CarouselSlider = () => {
  const carouselItems = [
    {
      image: "/slider1.png",
      
    },
    {
      image: "/slider2.png",
      
    },
    {
      image: "/images/slide3.png",
      // title: " Values",
      // description: "Building character with strong moral foundations"
    },
    {
      image: "/images/banner2.jpg",
    }
  ];
  const CustomPrevArrow = ({ onClick }) => (
    <button className="carousel-control prev" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronLeft} size="2x" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="carousel-control next" onClick={onClick}>
      <FontAwesomeIcon icon={faChevronRight} size="2x" />
    </button>
  );

  return (
    <div className="carousel-wrapper">
      <Carousel 
        className="custom-carousel"
        prevIcon={<CustomPrevArrow />}
        nextIcon={<CustomNextArrow />}
        interval={5000}
      >
        {carouselItems.map((item, index) => (
          <Carousel.Item key={index}>
            <div className="carousel-image-container">
              <img
                className="d-block w-100"
                src={item.image}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <style jsx>{`
        .carousel-wrapper {
          margin: 0;
          padding: 0;
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
        }
        .carousel-image-container {
          width: 100%;
          height: auto;
          max-height: 800px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carousel-image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .custom-carousel {
          background-color: #f8f9fa;
        }
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 2;
        }
        .carousel-control.prev {
          left: 5px;
        }
        .carousel-control.next {
          right: 5px;
        }
        // @media (max-width: 768px) {
        //   .carousel-wrapper {
        //     width: 100vw;
        //     margin-left: -50vw;
        //     margin-right: -50vw;
        //   }
          .carousel-image-container {
            height: 100px;
          }
          .carousel-control {
            width: 30px;
            height: 30px;
          }
          .carousel-control.prev {
            left: 0;
          }
          .carousel-control.next {
            right: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CarouselSlider;