// src/components/Flights/FlightFareDialog.jsx
import React from "react";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    Typography,
    Button,
    Grid,
    Box,
    Divider,
} from "@mui/material";

const fareOptions = [
    {
        type: "Saver Fare",
        baggage: [
            "7kgs (1 Piece * 7 Kgs ) Cabin Baggage",
            "No Check-in Baggage",
            "No Seat Selection",
            "Non-Refundable",

        ],
        flexibility: ["No Date Change",
            "Non-Refundable"
        ],
        more: [
            "Chargeable Seats",
            "No complimentary meals",

        ],
        priceAddon: 0,
    },
    {
        type: "Flexi Fare",
        baggage: [
            "7kgs (1 Piece * 7 Kgs ) Cabin Baggage",
            "15 Kgs Check-in Baggage",
            "Standard Seat Selection",
            "Free Date Change",
            "Refundable",
        ],
        flexibility: ["Free Date Change",
            "Refundable"
        ],
        more: [
            "Chargeable Seats",
            "No complimentary meals",

        ],
        priceAddon: 1500,
    },
    {
        type: "Premium Fare",
        baggage: [
            "7kgs (1 Piece * 7 Kgs ) Cabin Baggage",
            "25 Kgs Check-in Baggage",
            "Premium Seat Selection",
            "Free Date Change",
            "Refundable",
            "Lounge Access",
            "Priority Check-in & Boarding",
        ],
        flexibility: ["Free Date Change",
            "Refundable"
        ],
        more: [
            "Complimentary Meals",
            "Priority Check-in & Boarding",
            "Lounge Access",
        ],
        priceAddon: 2500,
    },
];

const FlightFareDialog = ({ flight, from, to, onClose }) => {
    return (
        <Dialog open={true} onClose={onClose} fullWidth maxWidth="lg">
            <DialogTitle sx={{ fontWeight: 600, fontSize: "1.2rem" }}>
                Flight Details and Fare Options available for you!
            </DialogTitle>
            <DialogContent dividers>
                {/* Flight Overview */}
                <Box sx={{ mb: 2 }}>
                    <Typography variant="h6">
                        {from} → {to}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        {flight.airline} · Wed, 8 Oct 25 · Departure at {flight.departureTime} - Arrival at {flight.arrivalTime}
                    </Typography>
                </Box>

                <Divider sx={{ mb: 2 }} />

                {/* Fare Options */}
                <Grid container spacing={2}>
                    {fareOptions.map((fare, index) => (
                        <Grid item xs={12} sm={4} key={index}>
                            <Box
                                sx={{
                                    p: 2,
                                    border: "1px solid #ddd",
                                    borderRadius: 2,
                                    backgroundColor: "#fafafa",
                                    height: "100%",
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600, mb: 1, color: "#1976d2" }}
                                >
                                    {fare.type}
                                </Typography>
                                <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>
                                    Baggage:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                                    {fare.baggage.map((b, i) => (
                                        <li key={i}>
                                            <Typography variant="body2">{b}</Typography>
                                        </li>
                                    ))}
                                </ul>
                                <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>
                                    Flexibility:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                                    {fare.flexibility.map((f, i) => (
                                        <li key={i}>
                                            <Typography variant="body2">{f}</Typography>
                                        </li>
                                    ))}
                                </ul>
                                <Typography variant="body2" sx={{ fontWeight: 600, mt: 1 }}>
                                    More:
                                </Typography>
                                <ul style={{ margin: 0, paddingLeft: "20px" }}>
                                    {fare.more.map((m, i) => (
                                        <li key={i}>
                                            <Typography variant="body2">{m}</Typography>
                                        </li>
                                    ))}
                                </ul>
                                <Divider sx={{ my: 2 }} />

                                <Typography
                                    variant="h6"
                                    sx={{ mt: 2, fontWeight: 600, color: "#2e7d32" }}
                                >
                                    ₹{(flight.price + fare.priceAddon).toLocaleString()}
                                </Typography>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    sx={{ mt: 2, borderRadius: 2 }}
                                >
                                    Book Now
                                </Button>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </DialogContent>

            <Box textAlign="center" sx={{ py: 1 }}>
                <Button onClick={onClose} color="secondary">
                    Close
                </Button>
            </Box>
        </Dialog>
    );
};

export default FlightFareDialog;
