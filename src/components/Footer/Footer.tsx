import React from "react";
import twitterIcon from "../../images/twitterIcon.svg";

const Footer = () => {
    return(
        <footer className="p-8 text-center flex justify-between items-center lg:p-4 ">
            <span></span>
            <span className="text-4xl text-slate-600 lg:text-sm">Built by Franco Perdomo</span>
            <a href="https://twitter.com/FranperTech" target="_blank" className="mr-2">
                <img src={twitterIcon} className="w-16 h-16 lg:w-8 lg:h-8" width="30" height="30" />
            </a>
        </footer>
    )
};

export default Footer;