import React, { useState } from "react";

const Passengers = () => {
  const [adults, setAdults] = useState(2); // default 2 adults
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  // const [travelClass, setTravelClass] = useState("Economy");
  const [open, setOpen] = useState(false);

  // Ensure adults >= rooms (each room needs at least 1 adult)
  const updateRooms = (newRooms) => {
    setRooms(newRooms);
    if (adults < newRooms) {
      setAdults(newRooms);
    }
  };

  // Generate display text dynamically
  const displayValue = `${adults} Adult${adults > 1 ? "s" : ""}` +
    (children > 0 ? ` | ${children} Child${children > 1 ? "ren" : ""}` : "") +
    // ` | ${rooms} Room${rooms > 1 ? "s" : ""} | ${travelClass}`;
    ` | ${rooms} Room${rooms > 1 ? "s" : ""} `;

  return (
    <div className="travellers-class-container">
      {/* Default Input */}
      <label htmlFor="travellers">Travellers & Class</label>
      <input
        type="text"
        id="travellers"
        readOnly
        value={displayValue}
        onClick={() => setOpen(!open)}
        className="travellers-input"
      />

      {/* Dropdown Section */}
      {open && (
        <div className="dropdown-panel">
          {/* Adults */}
          <div className="counter-group">
            <span>Adults</span>
            <div className="counter">
              <button
                onClick={() => setAdults(Math.max(rooms, adults - 1))} // min adults = rooms
              >
                -
              </button>
              <span>{adults}</span>
              <button onClick={() => setAdults(adults + 1)}>+</button>
            </div>
          </div>

          {/* Children */}
          <div className="counter-group">
            <span>Children</span>
            <div className="counter">
              <button onClick={() => setChildren(Math.max(0, children - 1))}>
                -
              </button>
              <span>{children}</span>
              <button onClick={() => setChildren(children + 1)}>+</button>
            </div>
          </div>

          {/* Rooms */}
          <div className="counter-group">
            <span>Rooms</span>
            <div className="counter">
              <button onClick={() => updateRooms(Math.max(1, rooms - 1))}>
                -
              </button>
              <span>{rooms}</span>
              <button onClick={() => updateRooms(rooms + 1)}>+</button>
            </div>
          </div>

          

          {/* Done button */}
          <button className="done-btn" onClick={() => setOpen(false)}>
            Done
          </button>
        </div>
      )}
    </div>
  );
};

export default Passengers;
