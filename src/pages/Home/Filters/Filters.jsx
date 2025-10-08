import React, { useState } from "react";
import FlightSearchForm from "./FlightSearchForm";
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Slider,
  Typography,
  Divider,
} from "@mui/material";
import FlightResults from "./FlightsResults";
import Nav from "../../Nav";

const FlightFilterSide = () => {
  // state for filters
  const [popularFilters, setPopularFilters] = useState({
    direct: false,
    cheapest: false,
    refundable: false,
  });

  const [airlines, setAirlines] = useState({
    Emirates: false,
    Indigo: false,
    "Air India": false,
    "Singapore Airlines": false,
  });

  const [priceRange, setPriceRange] = useState([3000, 20000]);
  const [departureTimes, setDepartureTimes] = useState({
    morning: false,
    afternoon: false,
    evening: false,
    night: false,
  });
  const [arrivalTimes, setArrivalTimes] = useState({
    morning: false,
    afternoon: false,
    evening: false,
    night: false,
  });

  const handleCheckboxChange = (stateSetter, prevState, field) => {
    stateSetter({ ...prevState, [field]: !prevState[field] });
  };

  return (
    <div className="flight-filter-page">
      <Nav />
      <div className="flight-filter-container">
        {/* Left Sidebar for Filters */}
        <div className="filters-sidebar">
          <Typography variant="h6">Filters</Typography>
          <Divider sx={{ my: 1 }} />

          {/* Popular Filters */}
          <Typography variant="subtitle1">Popular Filters</Typography>
          <FormGroup>
            {Object.keys(popularFilters).map((filter) => (
              <FormControlLabel
                key={filter}
                control={
                  <Checkbox
                    checked={popularFilters[filter]}
                    onChange={() =>
                      handleCheckboxChange(setPopularFilters, popularFilters, filter)
                    }
                  />
                }
                label={filter.charAt(0).toUpperCase() + filter.slice(1)}
              />
            ))}
          </FormGroup>

          <Divider sx={{ my: 2 }} />

          {/* Airlines */}
          <Typography variant="subtitle1">Airlines</Typography>
          <FormGroup>
            {Object.keys(airlines).map((airline) => (
              <FormControlLabel
                key={airline}
                control={
                  <Checkbox
                    checked={airlines[airline]}
                    onChange={() =>
                      handleCheckboxChange(setAirlines, airlines, airline)
                    }
                  />
                }
                label={`${airline} (₹${Math.floor(Math.random() * 5000) + 3000})`}
              />
            ))}
          </FormGroup>

          <Divider sx={{ my: 2 }} />

          {/* Price Range */}
          <Typography variant="subtitle1">Price Range</Typography>
          <Slider
            value={priceRange}
            onChange={(e, newValue) => setPriceRange(newValue)}
            valueLabelDisplay="auto"
            min={1000}
            max={50000}
            step={500}
          />
          <Typography>
            ₹{priceRange[0]} - ₹{priceRange[1]}
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Departure Time */}
          <Typography variant="subtitle1">Departure Time</Typography>
          <FormGroup>
            {Object.keys(departureTimes).map((time) => (
              <FormControlLabel
                key={time}
                control={
                  <Checkbox
                    checked={departureTimes[time]}
                    onChange={() =>
                      handleCheckboxChange(
                        setDepartureTimes,
                        departureTimes,
                        time
                      )
                    }
                  />
                }
                label={
                  time.charAt(0).toUpperCase() + time.slice(1) // Capitalize
                }
              />
            ))}
          </FormGroup>

          <Divider sx={{ my: 2 }} />

          {/* Arrival Time */}
          <Typography variant="subtitle1">Arrival Time</Typography>
          <FormGroup>
            {Object.keys(arrivalTimes).map((time) => (
              <FormControlLabel
                key={time}
                control={
                  <Checkbox
                    checked={arrivalTimes[time]}
                    onChange={() =>
                      handleCheckboxChange(setArrivalTimes, arrivalTimes, time)
                    }
                  />
                }
                label={time.charAt(0).toUpperCase() + time.slice(1)}
              />
            ))}
          </FormGroup>
        </div>

        {/* Right Section - Flights Result + Search Form */}
        <div className="flights-results">
          <FlightSearchForm />

          <div className="results-list">
            <FlightResults />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightFilterSide;
