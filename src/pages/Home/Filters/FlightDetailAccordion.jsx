// src/components/Flights/FlightDetailsAccordion.jsx
import React, { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

const FlightDetailsAccordion = ({ flight, from, to }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flight-accordion">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          aria-label="flight tabs"
        >
          <Tab label="Flight Details" />
          <Tab label="Flight Summary" />
          <Tab label="Cancellation" />
          <Tab label="Date Change" />
        </Tabs>
      </Box>

      {/* Tab Panels */}
      {activeTab === 0 && (
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">
            <strong>From:</strong> {from} ({flight.departureTime}) <br />
            <strong>To:</strong> {to} ({flight.arrivalTime})
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Duration: {flight.duration}, Stops: {flight.stops}
          </Typography>
        </Box>
      )}

      {activeTab === 1 && (
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">
            {flight.airline} Flight No: {flight["airline.No"]}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Fare: ₹{flight.price.toLocaleString()} per adult
          </Typography>
        </Box>
      )}

      {activeTab === 2 && (
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">
            Cancellation Policy:
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Free cancellation up to 24 hours before departure.
            Cancellation after that may incur charges.
          </Typography>
        </Box>
      )}

      {activeTab === 3 && (
        <Box sx={{ p: 2 }}>
          <Typography variant="body1">
            Date Change Policy:
          </Typography>
          <Typography variant="body2" color="textSecondary">
            You can change the travel date up to 48 hours before the
            scheduled departure (charges may apply).
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default FlightDetailsAccordion;
