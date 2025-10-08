import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#offers">Offers</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        <li><a href="#tours">Tours</a></li>
                        <li><a href="#faq">FAQ</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="footer-section">
                    <h3>Contact Info</h3>
                    <p>Email: info@travelwebsite.com</p>
                    <p>Phone: +91 9876543210</p>
                    <p>Address: 123 Travel Street, City, Country</p>
                </div>

                {/* Social Media */}
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} Travel Website. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
