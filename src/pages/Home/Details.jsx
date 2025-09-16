import React from 'react'

const detailsData = {
  Flights: {
    title: "Book Flights",
    text: "Find the best deals on domestic and international flights.",
  },
  Hotels: {
    title: "Book Hotels",
    text: "Discover top-rated hotels at unbeatable prices.",
  },
  Train: {
    title: "Book Trains",
    text: "Get your train tickets easily and quickly.",
  },
  Cab: {
    title: "Book Cabs",
    text: "Convenient and affordable cab services at your fingertips.",
  },
  Bus: {
    title: "Book Buses",
    text: "Travel comfortably with our bus booking options.",
  },
  Bike: {
    title: "Rent Bikes",
    text: "Explore the city with our bike rental services.",
  },
  Scooty: {
    title: "Rent Scooties",
    text: "Easy and quick scooty rentals for your daily commute.",
  },
  Villas: {
    title: "Book Villas",
    text: "Find luxurious villas for your next vacation.",
  },
};

const Details = ({ selected }) => {
  if (!selected) {
    return (
      <div className="details-home">
        <h2>Select an option above</h2>
      </div>
    );
  }

  const detail = detailsData[selected];

  return (
    <div className="details-home">
      <h2>{detail.title}</h2>
      <p>{detail.text}</p>
    </div>
  );
};

export default Details;
