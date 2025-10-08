// src/components/Flights/FlightResults.jsx
import React, { useState } from "react";
import flightsData from "../../data/Flights.json";
import { Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import FlightDetailsAccordion from "./FlightDetailAccordion";
import FlightFareDialog from "./FlightFareDialog";

const FlightResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const from = queryParams.get("from");
  const to = queryParams.get("to");

  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleView = (flight) => {
    setSelectedFlight(flight);
  };

  const handleClose = () => {
    setSelectedFlight(null);
  };

  const [openFlight, setOpenFlight] = useState(null);

  const handleAccordionToggle = (id) => {
    setOpenFlight(openFlight === id ? null : id);
  };

  return (
    <div className="results-list">
      <Typography variant="h6" sx={{ mt: 2 }}>
        Available Flights
      </Typography>

      {flightsData.map((flight) => (
        <div className="flight-card" key={flight.id}>
          <div className="flight-info">
            <div className="flight-img">
              <img
                src={flight.image}
                alt={flight.airline}
                className="flight-image"
              />
            </div>

            <div className="flight-details">
              <div className="flight-text">
                <h3>{flight.airline}</h3>
                <small>{flight["airline.No"]}</small>
              </div>

              <div className="route">
                <h3>{flight.departureTime}</h3>
                {from}
              </div>

              <div className="duration">
                <small>{flight.duration}</small>
                <div className="arrow"></div>
                <small>{flight.stops}</small>
              </div>

              <div className="times">
                <h3>{flight.arrivalTime}</h3>
                {to}
              </div>

              <div className="fare">
                <h3>₹{flight.price.toLocaleString()}</h3>
                <small>Per Adult</small>
              </div>
            </div>

            <div className="view-btn">
              <Button
                variant="contained"
                color="primary"
                component={Link}
                // to={flight.link}
                onClick={() => handleView(flight)}
              >
                View
              </Button>

              {selectedFlight && (
                <FlightFareDialog
                  flight={selectedFlight}
                  from={from}
                  to={to}
                  onClose={handleClose}
                />
              )}
            </div>
          </div>

          <div className="flight-offers">
            <section className="offer-badge">
              <Typography variant="body2" color="textSecondary">
                Get up to 10% off with code FLYHIGH
              </Typography>
              <p>|</p>
              <Typography variant="body2" color="textSecondary">
                Free cancellation on select flights
              </Typography>
            </section>
          </div>

          {/* Accordion toggle */}
          <div
            className="flight-note"
            onClick={() => handleAccordionToggle(flight.id)}
            style={{
              cursor: "pointer",
              color: "#1976d2",
              textAlign: "center",
              marginTop: "10px",
            }}
          >
            <h5>
              {openFlight === flight.id
                ? "Hide Flight Details ▲"
                : "View Flight Details ▼"}
            </h5>
          </div>

          {/* Accordion Component */}
          {openFlight === flight.id && (
            <FlightDetailsAccordion
              flight={flight}
              from={from}
              to={to}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FlightResults;
