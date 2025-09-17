import React from "react";
import Passengers from "../../../components/Passengers";
import CheckIn from "../../../components/CheckinOut/CheckIn";
import CheckOut from "../../../components/CheckinOut/CheckOut";


const Hotels = () => {
  return (
    <div className="hotels-container">
      {/* Where to go */}
      <div className="form-group">
        <label htmlFor="destination">Where to go</label>
        <select id="destination" className="form-control">
          <option value="">Select Destination</option>
          <option value="paris">Paris</option>
          <option value="newyork">New York</option>
          <option value="london">London</option>
          <option value="dubai">Dubai</option>
          <option value="tokyo">Tokyo</option>
        </select>
      </div>

      {/* Check-in / Check-out */}
      <div className="date-fields">
        <CheckIn />
        <CheckOut />
      </div>

      {/* Travellers & Class */}
      <div className="form-group">
        <Passengers />
      </div>

      {/* Search Button */}
      <div className="search-btn">
        <button type="submit">Search Hotels</button>
      </div>
    </div>
  );
};

export default Hotels;
