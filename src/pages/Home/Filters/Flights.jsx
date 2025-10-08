import React from 'react'
import { useLocation } from 'react-router-dom';
import FlightFilterSide from './Filters';
import FlightSearchForm from './FlightSearchForm';

const FlightFilter = () => {
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const from = params.get("from");
    const to = params.get("to");
    const departure = params.get("departure");
    const returnDate = params.get("returnDate");

    console.log({ from, to, departure, returnDate });
    return (
        <>
            {/* <div>
                <FlightSearchForm />
            </div> */}
            <div className="flight-filter-seperator">
                <FlightFilterSide />
            </div>
        </>
    )
}

export default FlightFilter