import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import Passengers from "../../../components/FlightPassengers"; // your passengers component
import countries from "../../data/Countries.json";

const FlightSearchForm = () => {
    const navigate = useNavigate();
    const { search } = useLocation();
    const params = new URLSearchParams(search);

    // Read initial values from URL
    const [tripType, setTripType] = useState(params.get("tripType") || "oneway");
    const [from, setFrom] = useState(params.get("from") || "");
    const [to, setTo] = useState(params.get("to") || "");
    const [departure, setDeparture] = useState(
        params.get("departure") ? dayjs(params.get("departure")) : null
    );
    const [returnDate, setReturnDate] = useState(
        params.get("returnDate") ? dayjs(params.get("returnDate")) : null
    );
    const [adults, setAdults] = useState(Number(params.get("adults")) || 2);
    const [children, setChildren] = useState(Number(params.get("children")) || 0);
    const [infants, setInfants] = useState(Number(params.get("infants")) || 0);

    // Handle search button
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
            adults,
            children,
            infants,
        }).toString();

        navigate(`/flights/filter?${queryParams}`);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="flights-container-filter">
                {/* Trip Type */}
                <RadioGroup
                    row
                    value={tripType}
                    onChange={(e) => setTripType(e.target.value)}
                >
                    <FormControlLabel value="oneway" control={<Radio />} label="One Way" />
                    <FormControlLabel value="roundtrip" control={<Radio />} label="Round Trip" />
                    <FormControlLabel value="multicity" control={<Radio />} label="Multi-City" />
                </RadioGroup>

                {/* From / To */}
                <div className="flight-locations">
                    <Autocomplete
                        options={countries.map((c) => c.name)}
                        value={from}
                        onChange={(e, value) => setFrom(value)}
                        renderInput={(params) => <TextField {...params} label="From" fullWidth />}
                    />
                    <Autocomplete
                        options={countries.map((c) => c.name)}
                        value={to}
                        onChange={(e, value) => setTo(value)}
                        renderInput={(params) => <TextField {...params} label="To" fullWidth />}
                    />

                    {/* Departure / Return */}
                    <DatePicker
                        label="Departure"
                        value={departure}
                        onChange={setDeparture}
                        slotProps={{ textField: { fullWidth: true, margin: "0" } }}
                    />
                    {tripType === "roundtrip" && (
                        <DatePicker
                            label="Return"
                            value={returnDate}
                            onChange={setReturnDate}
                            slotProps={{ textField: { fullWidth: true, margin: "0" } }}
                        />
                    )}

                    {/* Passengers */}
                    <Passengers
                        adults={adults}
                        setAdults={setAdults}
                        children={children}
                        setChildren={setChildren}
                        infants={infants}
                        setInfants={setInfants}
                    />
                </div>
                {/* Search Button */}
                <button className="button-3"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: "20px" }}
                    onClick={handleSearch}
                >
                    Search Flights
                </button>
            </div>

         
        </LocalizationProvider>
    );
};

export default FlightSearchForm;
