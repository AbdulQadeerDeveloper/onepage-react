import React from 'react';
import Bread from "../../images/beard-1845166_1920.jpg";

const Home = ({ name, designation }) => {
    return (
        <div className="banner" id="home">
            <div className="intro">
                <div className="wrapper">
                    <h3 className="text-uppercase">{name}</h3>
                    <p>{designation}</p>
                </div>
            </div>
            <div className="avatar">
                <img src={Bread} alt="" />
            </div>
        </div>
    );
};

export default Home;
