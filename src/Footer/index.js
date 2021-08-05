import React from "react";
import "./../style/Footer.css";
import FooterBottom from "./Footer_Bottom";
import FooterTop from "./Footer_Top";


const Footer = () => {
    return (
        <div id="footer">
            <FooterTop/>
            <FooterBottom/>
        </div>
    ) 
}

export default Footer