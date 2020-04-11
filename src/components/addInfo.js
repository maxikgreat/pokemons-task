
import React from 'react'
import {OverlayTrigger, Popover} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const AddInfo = ({genderRate, captureRate, isBaby}) => {
    return(
        <div className='add-info'>
            <OverlayTrigger
                trigger={['hover', 'focus']}
                placement='top'
                overlay={
                    <Popover id={`popover-positioned-top`}>
                        <Popover.Title as="h3">Gender rate</Popover.Title>
                    </Popover>
                }
            >
                <div className='add-info--gender-rate'>
                    <FontAwesomeIcon icon='star-half-alt' />
                    <span>{genderRate}</span>
                </div>
            </OverlayTrigger>
            <OverlayTrigger
                trigger={['hover', 'focus']}
                placement='top'
                overlay={
                    <Popover id={`popover-positioned-top`}>
                        <Popover.Title as="h3">Capture rate</Popover.Title>
                    </Popover>
                }
            >
                <div className='add-info--capture-rate'>
                    <FontAwesomeIcon icon='map-pin' />
                    <span>{captureRate}</span>
                </div>
            </OverlayTrigger>
            {
                isBaby
                    ? <OverlayTrigger
                        trigger={['hover', 'focus']}
                        placement='top'
                        overlay={
                            <Popover id={`popover-positioned-top`}>
                                <Popover.Title as="h3">Baby</Popover.Title>
                            </Popover>
                        }
                    >
                        <div className='add-info--is-baby'>
                            <FontAwesomeIcon icon ='baby-carriage' />
                        </div>
                    </OverlayTrigger>
                    : null
            }
        </div>
    )
};