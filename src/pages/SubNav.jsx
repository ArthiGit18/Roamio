import React, { useState, useEffect } from "react";
import Details from "./Home/Details";

export const navItems = [
    { name: "Flights", img: "/assets/img/y7.png", banner: "/assets/vehicle/flight2.jpg" },
    { name: "Hotels", img: "/assets/img/y8.png", banner: "/assets/vehicle/hotel1.jpg" },
    { name: "Train", img: "/assets/img/y3.png", banner: "/assets/vehicle/train1.jpg" },
    { name: "Cab", img: "/assets/img/y5.png", banner: "/assets/vehicle/car1.jpg" },
    { name: "Bus", img: "/assets/img/y4.png", banner: "/assets/vehicle/bus1.jpg" },
    { name: "Bike", img: "/assets/img/y6.png", banner: "/assets/vehicle/bike2.jpg" },
    { name: "Scooty", img: "/assets/img/y2.png", banner: "/assets/vehicle/scooty1.jpg" },
    { name: "Villas", img: "/assets/img/y1.png", banner: "/assets/vehicle/villa1.jpg" },
];

const SubNav = ({ onSelect, activeItem }) => {
    const [selected, setSelected] = useState(activeItem || navItems[0].name);

    useEffect(() => {
        if (onSelect) onSelect(navItems[0]); // Default = Flights
    }, []);

    const handleClick = (item) => {
        setSelected(item.name);
        if (onSelect) onSelect(item);
    };

    return (
        <div className="subnav-container">
            <div className="subnav flex justify-center gap-6">
                {navItems.map((item, index) => (
                    <div
                        key={index}
                        className={`subnav-item cursor-pointer p-2 text-center ${selected === item.name ? "border-b-4 border-blue-500" : ""
                            }`}
                        onClick={() => handleClick(item)}
                    >
                        <img src={item.img} alt={item.name} className="w-10 h-10 mx-auto" />
                        <h5>{item.name}</h5>
                    </div>
                ))}
            </div>

            <div className="subnav-details ">
                <Details selected={selected} />
            </div>
        </div>
    );
};

export default SubNav;
