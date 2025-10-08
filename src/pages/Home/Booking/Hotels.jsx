import React, { useState, useEffect } from "react";
import axios from "axios";
import Passengers from "../../../components/Passengers";
import CheckIn from "../../../components/CheckinOut/CheckIn";
import CheckOut from "../../../components/CheckinOut/CheckOut";
import { TextField, Autocomplete, Button } from "@mui/material";
import countriesData from "../../data/Countries.json";

const Hotels = () => {
  const [destination, setDestination] = useState("");
  const [countries, setCountries] = useState([]);

  // Load countries from local JSON
  useEffect(() => {
    if (countriesData) {
      const sortedCountries = countriesData
        .map((c) => c.name)
        .sort((a, b) => a.localeCompare(b));
      setCountries(sortedCountries);
    }
  }, []);

  const handleSearch = () => {
    if (!destination) {
      alert("Please select a destination.");
      return;
    }

    const data = {
      destination,
      // You can also add check-in, check-out, passengers data here
    };

    console.log("Hotel Search Data:", data);
    alert("✅ Hotel search data logged in console (replace with real API).");
  };

  return (
    <div className="hotels-container">
      {/* Where to go */}
      <div className="form-group">
        <Autocomplete
          options={countries}
          value={destination}
          onChange={(e, value) => setDestination(value)}
          renderInput={(params) => (
            <TextField {...params} label="Where to go" fullWidth />
          )}
        />
      </div>

      {/* Check-in / Check-out */}
      <div className="date-fields" style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
        <CheckIn />
        <CheckOut />
      </div>

      {/* Travellers & Class */}
      <div className="form-group" style={{ marginTop: "16px" }}>
        <Passengers />
      </div>

      {/* Search Button */}
      <div className="search-btn" style={{ marginTop: "24px" }}>
        <button className="button-3" variant="contained" color="primary" fullWidth onClick={handleSearch}>
          Search Hotels
        </button>
      </div>
    </div>
  );
};

export default Hotels;
