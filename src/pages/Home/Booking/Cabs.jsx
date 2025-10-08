import React, { useState, useEffect } from "react";
import { TextField, Autocomplete, Button, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import countriesData from "../../data/Countries.json";
import Passengers from "../../../components/Passengers";

const Cabs = () => {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [pickupDateTime, setPickupDateTime] = useState(dayjs());
  const [cabType, setCabType] = useState("sedan");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (countriesData) {
      const cityList = countriesData.map((c) => c.name).sort((a, b) => a.localeCompare(b));
      setCities(cityList);
    }
  }, []);

  const handleSearch = () => {
    if (!pickup || !drop) {
      alert("Please select pickup and drop locations.");
      return;
    }
    console.log({
      pickup,
      drop,
      pickupDateTime: pickupDateTime.format("YYYY-MM-DD HH:mm"),
      cabType,
    });
    alert("✅ Cabs booking data logged in console (replace with real API).");
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="cab-booking-container" >
        {/* Pickup Location */}
        <Autocomplete
          options={cities}
          value={pickup}
          onChange={(e, value) => setPickup(value)}
          renderInput={(params) => <TextField {...params} label="Pickup Location" fullWidth margin="normal" />}
        />

        {/* Drop Location */}
        <Autocomplete
          options={cities}
          value={drop}
          onChange={(e, value) => setDrop(value)}
          renderInput={(params) => <TextField {...params} label="Drop Location" fullWidth margin="normal" />}
        />

        {/* Pickup Date & Time */}
        <DateTimePicker
          label="Pickup Date & Time"
          value={pickupDateTime}
          onChange={(newValue) => setPickupDateTime(newValue)}
          renderInput={(params) => <TextField {...params} fullWidth margin="normal" />}
        />

        {/* Cabs Type */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="cab-type-label">Cabs Type</InputLabel>
          <Select
            labelId="cab-type-label"
            value={cabType}
            label="Cabs Type"
            onChange={(e) => setCabType(e.target.value)}
          >
            <MenuItem value="sedan">Sedan</MenuItem>
            <MenuItem value="suv">SUV</MenuItem>
            <MenuItem value="luxury">Luxury</MenuItem>
            <MenuItem value="mini">Mini</MenuItem>
          </Select>
        </FormControl>

        {/* Passengers */}
        <Passengers />

        {/* Search Button */}
        <button className="button-3" variant="contained" color="primary" fullWidth style={{ marginTop: "20px" }} onClick={handleSearch}>
          Book Cabs
        </button>
      </div>
    </LocalizationProvider>
  );
};

export default Cabs;
