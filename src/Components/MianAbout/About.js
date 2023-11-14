import React from 'react';
import bread from "../../images/beard-1845166_1920.jpg";
import socialLinksData from './socialLinks.json';
import aboutMeData from './aboutMe.json';

const About = () => {
    const socialLinks = socialLinksData.socialLinks;
    const aboutMeDescription = aboutMeData.aboutMe.description;

    return (
        <div className="about" id="about">
            <div className="wrap">
                <div className="row" id="row">
                    <div className="col-md-3 offset-1">
                        <div className="left-side">
                            <div className="img">
                                <img src={bread} alt="Profile" />
                            </div>
                            <div className="social-links text-center">
                                {socialLinks.map((link, index) => (
                                    <React.Fragment key={link.id}>
                                        <a href={link.url}>
                                            <i className={`fab fa-${link.name.toLowerCase().replace(" ", "-")}`}></i>
                                        </a>
                                        {index < socialLinks.length - 1 && <span className="icon-space"></span>}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 aboutme" style={{ overflow: 'hidden' }}>
                        <div className="about-text-section">
                            <h3 className="ab-me">About <span className="span">Me</span></h3>
                           <br/>
                            <p>{aboutMeDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
