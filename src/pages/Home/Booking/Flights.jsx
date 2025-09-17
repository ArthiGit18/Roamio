import React from 'react';
import Passengers from '../../../components/Passengers';

const Flights = () => {
    return (
        <div className="flights-container">
            <div className="trip-types">
                <input type="radio" name="tripType" value="oneway" id="oneway" defaultChecked />
                <label htmlFor="oneway">One Way</label>

                <input type="radio" name="tripType" value="roundtrip" id="roundtrip" />
                <label htmlFor="roundtrip">Round Trip</label>

                <input type="radio" name="tripType" value="multicity" id="multicity" />
                <label htmlFor="multicity">Multi-City</label>
            </div>

            <div className="form-fields">
                <div>
                    <label htmlFor="from">From</label>
                    <input type="text" id="from" placeholder="Enter city or airport" />
                </div>

                <div>
                    <label htmlFor="to">To</label>
                    <input type="text" id="to" placeholder="Enter city or airport" />
                </div>

                <div>
                    <label htmlFor="departure">Departure</label>
                    <input type="date" id="departure" />
                </div>

                <div>
                    <label htmlFor="return">Return</label>
                    <input type="date" id="return" />
                </div>

                <div className="passengers-class">
                    <Passengers />
                </div>


                <div>
                    <label htmlFor="class">Class</label>
                    <select id="class">
                        <option value="economy">Economy</option>
                        <option value="business">Business</option>
                        <option value="first">First Class</option>
                    </select>
                </div>
            </div>

            <div className="search-btn">
                <button type="submit">Search Flights</button>
            </div>
        </div>
    );
};

export default Flights;
