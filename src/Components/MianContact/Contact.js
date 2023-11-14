import React from "react";

import LeftBgContact from "../MianContact/LeftBgContact";
import RightBgContact from "../MianContact/RightBgContact";


function Contact() {
    return (
        <div>
            <div className="contact-section clearfix" id="contact">
                <div className="contact-desc">
                    <LeftBgContact />
                    <RightBgContact />
                </div>
            </div>
        </div>
    );
}

export default Contact;
