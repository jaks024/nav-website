import React from "react";
import './ContactBarStyle.css';
import github from './icons/github.png';
import linkedin from './icons/linkedin.svg';
class ContactBar extends React.Component
{

    render()
    {
        return(
            <div className="contact-bar-content">
                <div className="contact-bar-img">
                    <a href="https://github.com/jaks024">
                        <img src={github} alt="github"></img>
                    </a>
                </div>
                <div className="contact-bar-img">
                    <a href="https://www.linkedin.com/in/jacksonn-ye/">
                        <img src={linkedin} alt="linkedin"></img>
                    </a>
                </div>
            </div>
        );
    }
}

export default ContactBar;