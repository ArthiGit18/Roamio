// import React from 'react'
// import Lottie from 'lottie-react'
// import Loading from '../../../public/assets/images/loading.json'

// const Offers = () => {
//   return (
//     <div style={{ width: 300, height: 300 }}>
//       <Lottie animationData={Loading} loop={true} />
//     </div>
//   )
// }

// export default Offers

import React, {useState, useEffect} from 'react'
import { travelData } from '../data/TravelData';

export const navItems = [
  { name: "Adventure" },
  { name: "Hill Stations" },
  { name: "Spiritual Sites" },
  { name: "Beach & Island" },  // fixed typo "Istand"
  { name: "Historical Sites" },
  { name: "Wildlife" },
  { name: "Unique Landscapes" },
  { name: "Peaceful Retreats" },
];

const Offers = ({ onSelect, activeItem }) => {
  const [selected, setSelected] = useState(activeItem || navItems[0].name);

  useEffect(() => {
    if (onSelect) onSelect(navItems[0]);
  }, []);

  const handleClick = (item) => {
    setSelected(item.name);
    if (onSelect) onSelect(item);
  };

  return (
    <div className='offers'>
      <div className='offer-card'>
        <h2>Offers For You</h2>

         <div className="offer-list">
          {navItems.map((item, index) => (
            <div
              key={index}
              className={`subnav-item ${selected === item.name ? "active" : ""}`}
              onClick={() => handleClick(item)}
            >
              <h5>{item.name}</h5>
            </div>
          ))}
        </div>

        {/* Travel Data Display */}
      <div className="travel-slider">
          {travelData[selected]?.map((spot, idx) => (
            <div key={idx} className="travel-card">
              <img src={spot.image} alt={spot.name} />
              <h3>{spot.name}</h3>
              <p>{spot.description}</p>
              <a href={spot.link} target="_blank" rel="noopener noreferrer">
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
      </div>
  );
};

export default Offers