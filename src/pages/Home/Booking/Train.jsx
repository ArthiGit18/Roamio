import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import countriesData from "../../data/Countries.json";

const Train = () => {
  const [selectedOption, setSelectedOption] = useState("book");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [pnr, setPnr] = useState("");
  const [trainNumber, setTrainNumber] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (countriesData) {
      const sortedCities = countriesData.map((c) => c.name).sort((a, b) => a.localeCompare(b));
      setCities(sortedCities);
    }
  }, []);

  const handleSearch = () => {
    if (selectedOption === "book") {
      if (!from || !to) {
        alert("Please select both From and To cities.");
        return;
      }
      console.log("Train Booking Data:", { from, to });
      alert("✅ Train booking data logged in console.");
    } else if (selectedOption === "pnr") {
      if (!pnr) {
        alert("Please enter PNR number.");
        return;
      }
      console.log("Check PNR:", pnr);
      alert("✅ PNR search data logged in console.");
    } else if (selectedOption === "status") {
      if (!trainNumber) {
        alert("Please enter Train Number or Name.");
        return;
      }
      console.log("Live Train Status:", trainNumber);
      alert("✅ Train status search logged in console.");
    }
  };

  return (
    <div className="trains-container" >
      {/* Radio Options */}
      <RadioGroup row value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
        <FormControlLabel value="book" control={<Radio />} label="Book Train Ticket" />
        <FormControlLabel value="pnr" control={<Radio />} label="Check PNR Number" />
        <FormControlLabel value="status" control={<Radio />} label="Live Train Status" />
      </RadioGroup>

      {/* Conditional Forms */}
      <div className="radio-group" >
        {selectedOption === "pnr" && (
          <TextField
            label="Enter 10 Digit PNR Number"
            value={pnr}
            onChange={(e) => setPnr(e.target.value)}
            fullWidth
            inputProps={{ maxLength: 10 }}
            margin="normal"
          />
        )}

        {selectedOption === "status" && (
          <TextField
            label="Enter Train Number or Name"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            fullWidth
            margin="normal"
          />
        )}

        {selectedOption === "book" && (
          <div className="booking-fields">
            <Autocomplete
              options={cities}
              value={from}
              onChange={(e, value) => setFrom(value)}
              renderInput={(params) => <TextField {...params} label="From" fullWidth margin="normal" />}
            />

            <Autocomplete
              options={cities}
              value={to}
              onChange={(e, value) => setTo(value)}
              renderInput={(params) => <TextField {...params} label="To" fullWidth margin="normal" />}
            />

            <TextField
              type="date"
              label="Departure"
              value=""
              onChange={() => {}}
              fullWidth
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="button-3" variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Train;
