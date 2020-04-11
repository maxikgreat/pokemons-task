

import React from 'react'

export const AbilitiesInPok = ({skills}) => {

    const renderSkills = () => {
        return skills.map((skill, index) => {
            return (
                <div key={index} className={'bg-'+skill.color + ' skill'}>
                    <img src = {skill.img} alt = "Skill"/>
                    <span>{skill.name.replace("-", " ").toUpperCase()}</span>
                </div>
            )
        })
    };

    return(
        <div className='skills-container'>
            {renderSkills()}
        </div>
    )

};

