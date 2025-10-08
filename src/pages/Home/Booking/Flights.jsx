import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // for navigation
import {
  TextField,
  Autocomplete,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import Passengers from "../../../components/FlightPassengers";
import countries from "../../data/Countries.json";

const Flights = () => {
  const navigate = useNavigate(); // router navigate
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departure, setDeparture] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleSearch = () => {
    if (!from || !to || !departure) {
      alert("Please select From, To, and Departure date.");
      return;
    }

    const queryParams = new URLSearchParams({
      tripType,
      from,
      to,
      departure: dayjs(departure).format("YYYY-MM-DD"),
      returnDate: returnDate ? dayjs(returnDate).format("YYYY-MM-DD") : "",
    }).toString();

    // Navigate to filter page with query params
    navigate(`/flights/filter?${queryParams}`);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="flights-container">
        {/* Trip Type */}
        <div className="trip-types">
          <RadioGroup
            row
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
          >
            <FormControlLabel value="oneway" control={<Radio />} label="One Way" />
            <FormControlLabel value="roundtrip" control={<Radio />} label="Round Trip" />
            <FormControlLabel value="multicity" control={<Radio />} label="Multi-City" />
          </RadioGroup>
        </div>

        <div className="flights-fields">
          {/* From */}
          <Autocomplete
            options={countries.map((c) => c.name)}
            value={from}
            onChange={(e, value) => setFrom(value)}
            renderInput={(params) => <TextField {...params} label="From Country" fullWidth />}
          />

          {/* To */}
          <Autocomplete
            options={countries.map((c) => c.name)}
            value={to}
            onChange={(e, value) => setTo(value)}
            renderInput={(params) => <TextField {...params} label="To Country" fullWidth />}
          />

          {/* Departure Date */}
          <DatePicker
            label="Departure"
            value={departure}
            onChange={setDeparture}
            slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
          />

          {/* Return Date */}
          {tripType === "roundtrip" && (
            <DatePicker
              label="Return"
              value={returnDate}
              onChange={setReturnDate}
              slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
            />
          )}

          {/* Passengers */}
          <Passengers />
        </div>

        {/* Search Button */}
        <button
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
          onClick={handleSearch}
          className="button-3"
        >
          Search Flights
        </button>
      </div>
    </LocalizationProvider>
  );
};

export default Flights;
