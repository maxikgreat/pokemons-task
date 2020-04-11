

import React from 'react'
import {OverlayTrigger, Popover} from "react-bootstrap";

export const AbilitiesInPok = ({skills}) => {

    const renderSkills = () => {
        return skills.map((skill, index) => {
            return (
                <OverlayTrigger
                    rootClose
                    key={index}
                    trigger={'click'}
                    placement='top'
                    overlay={
                        <Popover id={`popover-positioned-top`}>
                            <Popover.Title as="h3">{skill.desc}</Popover.Title>
                            <Popover.Content>
                                <button className='btn btn-success'>More</button>
                            </Popover.Content>
                        </Popover>
                    }
                >
                    <div className={'bg-'+skill.color + ' skill'}>
                        <img src = {skill.img} alt = "Skill"/>
                        <span>{skill.name.replace("-", " ").toUpperCase()}</span>
                    </div>
                </OverlayTrigger>

            )
        })
    };

    return(
        <div className='skills-container'>
            {renderSkills()}
        </div>
    )

};

