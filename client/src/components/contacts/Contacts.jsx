import React from 'react';
import './Contacts.css'
import ScrollToTop from "react-scroll-to-top";

const Contacts = () => {
    return (
        <div className="contacts__wrapper" id="contacts">
            <ScrollToTop smooth />
            <address className="contacts__address">
                <a href="tel:+79124535115" className="contacts__address__tel">+7 912 453 51 15</a><br/>
                <a href="mailto:ourvbook@gmail.com" className="contacts__address__mail">ourvbook@gmail.com</a><br/>
            </address>
            <div className="contacts__social__apps">
                <a
                    href="https://t.me/toxcrit"
                    target="_blank"
                >
                    <img
                        className="contacts__telegram"
                        src={require("../../assets/logo/telegram.png")}
                        alt="telegram"/>
                </a>
                <a
                    href="https://vk.com/lihachevalina"
                    target="_blank"
                >
                    <img className="contacts__vk" src={require("../../assets/logo/vk.png")} alt="vk"/>
                </a>
            </div>
        </div>
    );
};

export default Contacts;