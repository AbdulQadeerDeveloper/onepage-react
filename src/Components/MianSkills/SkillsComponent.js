import React from 'react';
import skillsData from './skillsData.json';


const SkillsComponent = () => {
    return (
        <div className="col-md-6">
            <h2 className="skills-heading">MY <span className="span">Skills</span></h2>
            <div id="slider" className="slider">
                {skillsData.map((skill, index) => (
                    <div className="cssProgress" key={index}>
                        <div className="count">
                            <span>{skill.name}</span>
                            <span className={skill.labelClass}>{skill.percentage}%</span>
                        </div>
                        <div className="progress1">
                            <div className={`cssProgress-bar ${skill.barClass}`} data-percent={skill.percentage}
                                style={{ width: `${skill.percentage}%` }}>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsComponent;
