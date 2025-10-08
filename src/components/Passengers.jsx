import React, { useState } from "react";
import {
  TextField,
  Popover,
  Button,
  IconButton,
  Typography,
  Stack,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const Passengers = () => {
  const [adults, setAdults] = useState(2); // default 2 adults
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);

  // Ensure adults >= rooms
  const updateRooms = (newRooms) => {
    setRooms(newRooms);
    if (adults < newRooms) setAdults(newRooms);
  };

  const displayValue = `${adults} Adult${adults > 1 ? "s" : ""}` +
    (children > 0 ? ` | ${children} Child${children > 1 ? "ren" : ""}` : "") +
    ` | ${rooms} Room${rooms > 1 ? "s" : ""}`;

  const handleOpen = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const open = Boolean(anchorEl);

  return (
    <div>
      <TextField
        label="Travellers & Rooms"
        value={displayValue}
        onClick={handleOpen}
        fullWidth
        InputProps={{ readOnly: true }}
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: { p: 2, minWidth: 280, borderRadius: 2 }
        }}
      >
        <Stack spacing={2}>
          {/* Adults */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography>Adults</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton size="small" onClick={() => setAdults(Math.max(rooms, adults - 1))}>
                <Remove />
              </IconButton>
              <Typography>{adults}</Typography>
              <IconButton size="small" onClick={() => setAdults(adults + 1)}>
                <Add />
              </IconButton>
            </Stack>
          </Stack>

          {/* Children */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography>Children</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton size="small" onClick={() => setChildren(Math.max(0, children - 1))}>
                <Remove />
              </IconButton>
              <Typography>{children}</Typography>
              <IconButton size="small" onClick={() => setChildren(children + 1)}>
                <Add />
              </IconButton>
            </Stack>
          </Stack>

          {/* Rooms */}
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography>Rooms</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton size="small" onClick={() => updateRooms(Math.max(1, rooms - 1))}>
                <Remove />
              </IconButton>
              <Typography>{rooms}</Typography>
              <IconButton size="small" onClick={() => updateRooms(rooms + 1)}>
                <Add />
              </IconButton>
            </Stack>
          </Stack>

          <Button variant="contained" fullWidth onClick={handleClose}>
            Done
          </Button>
        </Stack>
      </Popover>
    </div>
  );
};

export default Passengers;
