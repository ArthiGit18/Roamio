import React, { useState } from "react";
import SubNav, { navItems } from "../SubNav"; // export navItems for default

const Banner = () => {
    const [bgImage, setBgImage] = useState(navItems[0].banner); // default Flights banner
    const [activeItem, setActiveItem] = useState(navItems[0].name); // default Flights

    return (
        <div
            className="banner"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                color: "white",
            }}
        >
            <div className="banner-content text-center mb-8">
                <h1 className="text-4xl font-bold">Discover Your Next Journey</h1>
                <p className="text-lg">Book flights, hotels, and holidays with ease</p>
            </div>

            <div className="banner-option">
                <SubNav
                    activeItem={activeItem}
                    onSelect={(item) => {
                        setBgImage(item.banner);
                        setActiveItem(item.name);
                    }}
                />
            </div>
        </div>
    );
};

export default Banner;
