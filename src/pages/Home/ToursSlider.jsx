import React from "react";

const toursData = [
  {
    name: "Himalayan Adventure",
    duration: "7 Days",
    price: "$1200",
    image: "/assets/tours/1.jpg",
    link: "#",
  },
  {
    name: "Kerala Backwaters",
    duration: "5 Days",
    price: "$800",
    image: "/assets/tours/2.jpg",
    link: "#",
  },
  {
    name: "Rajasthan Heritage",
    duration: "6 Days",
    price: "$950",
    image: "/assets/tours/3.jpg",
    link: "#",
  },
  {
    name: "Goa Beaches",
    duration: "4 Days",
    price: "$600",
    image: "/assets/tours/4.jpg",
    link: "#",
  },
  {
    name: "Leh-Ladakh",
    duration: "8 Days",
    price: "$1500",
    image: "/assets/tours/5.jpg",
    link: "#",
  },
];

const ToursSlider = () => {
  // Duplicate the data to create an infinite loop effect
  const loopData = [...toursData, ...toursData];

  return (
    <div className="tours-slider">
      <h2>Popular Tours & Packages</h2>
      <div className="slider-wrapper">
        <div className="slider-container">
          {loopData.map((tour, index) => (
            <div key={index} className="tour-card">
              <img src={tour.image} alt={tour.name} />
              <div className="tour-info">
                <h3>{tour.name}</h3>
                <p>{tour.duration}</p>
                <p>{tour.price}</p>
                <a href={tour.link} className="book-btn">
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToursSlider;
