import React from 'react'
import Flights from '../Home/Booking/Flights'
import Hotels from './Booking/Hotels';
import Cabs from './Booking/Cabs';
import Villas from './Booking/Villas';
import Train from './Booking/Train';
import Bus from './Booking/Bus';

const componentsMap = {
  Flights: Flights,
  Hotels: Hotels,
  Cabs: Cabs,
  Villas: Villas,
  Train: Train,
  Bus: Bus
}

const Details = ({ selected }) => {
  if (!selected) {
    return (
      <div className="details-home">
        <h2>Select an option above</h2>
      </div>
    );
  }

  const Component = componentsMap[selected]; // pick component dynamically
  return Component ? <Component /> : <h2>Not Found</h2>;
};

export default Details;
