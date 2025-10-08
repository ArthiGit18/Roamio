import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const CheckIn = ({ value, onChange }) => {
  const [date, setDate] = useState(value || null);

  const handleChange = (newValue) => {
    setDate(newValue);
    if (onChange) onChange(newValue); // propagate to parent
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Check In"
        value={date}
        onChange={handleChange}
        slotProps={{
          textField: { fullWidth: true, margin: "normal" },
        }}
      />
    </LocalizationProvider>
  );
};

export default CheckIn;
