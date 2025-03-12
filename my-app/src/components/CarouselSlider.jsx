import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CarouselSlider = () => {
  const carouselItems = [
    {
      image: "/images/slide1.png",
      //title: "Welcome to Kalam Academy",
     // description: "Empowering minds through quality education"
    },
    {
      image: "/images/slide2.png",
      title: "Excellence in Education",
      description: "Comprehensive coaching for cracking competitive exams"
    },
    {
      image: "/images/slide3.png",
      title: "Islamic Values",
      description: "Building character with strong moral foundations"
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
            <Carousel.Caption className="carousel-caption">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <style jsx>{`
        .carousel-wrapper {
          margin-top: 76px;
        }
        .carousel-image-container {
          width: 100%;
          height: auto;
          max-height: 600px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carousel-image-container img {
          width: 100%;
          height: auto;
          max-height: 100%;
          object-fit: contain;
        }
        .custom-carousel {
          background-color: #f8f9fa;
        }
        .carousel-caption {
          background: rgba(0, 0, 0, 0.5);
          padding: 20px;
          border-radius: 10px;
          bottom: 20%;
        }
        .carousel-caption h2 {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .carousel-caption p {
          font-size: 1.2rem;
        }
        .carousel-control {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.5);
          border: none;
          width: 50px;
          height: 50px;
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
          left: 20px;
        }
        .carousel-control.next {
          right: 20px;
        }
      `}</style>
    </div>
  );
};

export default CarouselSlider;