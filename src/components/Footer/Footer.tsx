import React from "react";
import twitterIcon from "../../images/twitterIcon.svg";

const Footer = () => {
    return(
        <footer className="p-4 text-center flex justify-between items-center">
            <span></span>
            <span className="text-sm text-slate-600">Built by Franco Perdomo</span>
            <a href="https://twitter.com/FranperTech" target="_blank" className="mr-2">
                <img src={twitterIcon}  width="30" height="30" />
            </a>
        </footer>
    )
};

export default Footer;