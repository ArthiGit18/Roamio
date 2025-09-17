import React, { useState } from "react";


const Train = () => {
  const [selectedOption, setSelectedOption] = useState("book");

  return (
    <div className="trains-container">
      {/* Radio Options */}
      <div className="radio-group">
        <label>
          <input
            type="radio"
            value="book"
            checked={selectedOption === "book"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Book Train Ticket
        </label>

        <label>
          <input
            type="radio"
            value="pnr"
            checked={selectedOption === "pnr"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Check PNR Number
        </label>

        <label>
          <input
            type="radio"
            value="status"
            checked={selectedOption === "status"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Live Train Status
        </label>
      </div>

      {/* Conditional Forms */}
      <div className="form-section">
        {selectedOption === "pnr" && (
          <div className="form-group">
            <label htmlFor="pnr">Enter 10 Digit PNR Number</label>
            <input
              type="text"
              id="pnr"
              maxLength="10"
              className="form-control"
              placeholder="1234567890"
            />
          </div>
        )}

        {selectedOption === "status" && (
          <div className="form-group">
            <label htmlFor="train">Enter Train Number or Name</label>
            <input
              type="text"
              id="train"
              className="form-control"
              placeholder="Eg: 12647 or Shatabdi Express"
            />
          </div>
        )}

        {selectedOption === "book" && (
          <div className="book-ticket">
            <div className="form-group">
              <label htmlFor="from">From</label>
              <select id="from" className="form-control">
                <option value="">Select Departure City</option>
                <option value="chennai">Chennai</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="kolkata">Kolkata</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="to">To</label>
              <select id="to" className="form-control">
                <option value="">Select Destination City</option>
                <option value="chennai">Chennai</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="bangalore">Bangalore</option>
                <option value="kolkata">Kolkata</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="departure">Departure</label>
              <input type="date" id="departure" className="form-control" />
            </div>
          </div>
        )}
      </div>

      {/* Search Button */}
      <div className="search-btn">
        <button type="submit">Search</button>
      </div>
    </div>
  );
};

export default Train;
