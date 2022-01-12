import { Heading, Layout } from '@shopify/polaris';
import React from 'react';
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <div classname="footer">
            <div className="footer__wrapper">
                <div className="footer__desc">
                        <h2>How it works?</h2>
                        <h2>About Us</h2>
                        <h2>FAQ</h2>
                        <h2>Contact Us</h2>
                        <h2>Terms of Use</h2>
                        <h2>Privacy Policy</h2>
                </div>
                <div className="footer__divider">
                    <span></span>
                </div>
                <div className="footer__copyright">
                        <img src={logo} alt="logo" />
                        <p>All rights reserved by PURPLE 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;