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
    const [infants, setInfants] = useState(1);
    const [anchorEl, setAnchorEl] = useState(null);

    // Handle infants safely: max infants = adults, min = 0
    const updateInfants = (newInfants) => {
        if (newInfants < 0) newInfants = 0;
        if (newInfants > adults) newInfants = adults;
        setInfants(newInfants);
    };

    // Display text for input
    const displayValue = `${adults} Adult${adults > 1 ? "s" : ""}` +
        (children > 0 ? ` | ${children} Child${children > 1 ? "ren" : ""}` : "") +
        ` | ${infants} Infant${infants !== 1 ? "s" : ""}`;

    const handleOpen = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const open = Boolean(anchorEl);

    return (
        <div>
            <TextField
                label="Travellers"
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
                            <IconButton size="small" onClick={() => setAdults(Math.max(1, adults - 1))}>
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

                    {/* Infants */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center">
                        <Typography>Infants</Typography>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <IconButton size="small" onClick={() => updateInfants(infants - 1)}>
                                <Remove />
                            </IconButton>
                            <Typography>{infants}</Typography>
                            <IconButton size="small" onClick={() => updateInfants(infants + 1)}>
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
