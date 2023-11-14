import React from "react";
import SkillsComponent from "./SkillsComponent";

function Skill() {
    const content = {
        study: {
            heading: "Study",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aliquid nihil fugit, magni culpa non libero, soluta laboriosam excepturi laborum quaerat aliquam quod cupiditate animi sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam veritatis ratione voluptas odio dolorem fugit, totam ab quod quis quae."
        }
    }
    return (
        <>
            <div className="skills" id="skill">
                <div className="wrap">
                    <div className="floating-element"></div>
                    <div className="floating-element-right"></div>


                    <div className="row" id="skills">
                        <div className="col-md-3 offset-1">
                            <h3>{content.study.heading}</h3>
                            <p>{content.study.paragraph}</p>
                        </div>
                         <SkillsComponent/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skill;
