import React, { useState, useEffect } from "react";


const galleryData = [
    {
        name: "Santorini, Greece",
        image: "/assets/gallery/1.jpg",
        description: "Beautiful whitewashed houses with blue domes.",
        link: "https://en.wikipedia.org/wiki/Santorini",
    },
    {
        name: "Leh-Ladakh, India",
        image: "/assets/gallery/2.jpg",
        description: "High-altitude desert with monasteries and Pangong Lake.",
        link: "https://en.wikipedia.org/wiki/Ladakh",
    },
    {
        name: "Bali, Indonesia",
        image: "/assets/gallery/3.jpg",
        description: "Island of temples, beaches, and rice terraces.",
        link: "https://en.wikipedia.org/wiki/Bali",
    },
    {
        name: "Swiss Alps",
        image: "/assets/gallery/4.jpg",
        description: "Snowy mountains and alpine villages.",
        link: "https://en.wikipedia.org/wiki/Swiss_Alps",
    },
    {
        name: "Kyoto, Japan",
        image: "/assets/gallery/5.jpg",
        description: "Famous for cherry blossoms and traditional temples.",
        link: "https://en.wikipedia.org/wiki/Kyoto",
    },
    {
        name: "Maldives",
        image: "/assets/gallery/6.jpg",
        description: "Overwater villas and crystal clear beaches.",
        link: "https://en.wikipedia.org/wiki/Maldives",
    },
    {
        name: "Himalayan Adventure",
        description: "Snow-capped peaks and thrilling treks.",
        image: "/assets/images/himalaya.jpg",
        link: "https://example.com/himalaya",
    },
    {
        name: "Goa Beach",
        description: "Golden sands and vibrant nightlife.",
        image: "/assets/images/goa.jpg",
        link: "https://example.com/goa",
    },
    {
        name: "Taj Mahal",
        description: "A symbol of love and Mughal architecture.",
        image: "/assets/images/tajmahal.jpg",
        link: "https://example.com/tajmahal",
    },
];

const Gallery = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        if (visibleCount < galleryData.length) {
            setVisibleCount((prev) => prev + 3);
        }
    };

    const handleShowLess = () => {
        setVisibleCount(3);
    };
    return (
        <div div className="gallery-section" >
            <h2>Popular Destinations</h2>
            <div className="gallery-grid">
                {galleryData.slice(0, visibleCount).map((spot, index) => (
                    <div
                        key={index}
                        className={`gallery-item ${index % 2 === 0 ? "landscape" : "portrait"
                            }`}
                    >
                        <img src={spot.image} alt={spot.name} />
                        <div className="overlay">
                            <h3>{spot.name}</h3>
                            <p>{spot.description}</p>
                            <a href={spot.link} target="_blank" rel="noopener noreferrer">
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="gallery-actions">
                {visibleCount < galleryData.length ? (
                    <button className="button-3" onClick={handleLoadMore}>Load More</button>
                ) : (
                    <button className="button-3" onClick={handleShowLess}>Show Less</button>
                )}
            </div>
        </div>
    );
};

export default Gallery;
