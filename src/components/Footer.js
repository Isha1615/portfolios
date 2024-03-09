import "./FooterStyles.css";

import React from 'react';

import { FaHome,FaPhone , FaMailBulk , FaFacebook , FaTwitter , FaLinkedin, FaInstagram} from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={
                            { color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>Bankipur Gorakh, Fatuha</p>
                            <p>Patna , Bihar , India</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={
                            { color: "#fff", marginRight: "2rem" }}/>
                            +91-7061328305</h4>    
                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={
                            { color: "#fff", marginRight: "2rem" }}/>
                            ishajais9973@gmail.com</h4>    
                    </div>
                    <div className="social">
                    <FaFacebook size={30} style={
                            { color: "#fff", marginRight: "1rem" }}/>
                            <FaTwitter size={20} style={
                            { color: "#fff", marginRight: "1rem" }}/>
                            <FaLinkedin size={20} style={
                            { color: "#fff", marginRight: "1rem" }}/>
                            <FaInstagram size={20} style={
                            { color: "#fff", marginRight: "1rem" }}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
