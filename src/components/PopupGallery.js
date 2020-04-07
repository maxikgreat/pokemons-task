

import React, {useEffect, useRef} from 'react'
import { useSpring, animated } from 'react-spring'
import {Carousel} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const PopupGallery = ({setVisible, sprites}) => {

    const _gallery = useRef();

    useEffect(() => {
        //todo iphone fix scrolling
        _gallery.current.style.overflow = 'hidden';
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            if(e.key === 'Escape'){
                closeGallery();
            }
        })
    }, []);

    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
    const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

    const closeGallery = () => {
        document.body.style.overflow = 'auto';
        setVisible(false);
    };

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

    const renderPhotos = () => {
        return sprites.map((sprite, index) => {
            return(
                <Carousel.Item key={index}>
                    <animated.img
                        src={sprite}
                        className="photo"
                        onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                        onMouseLeave={() => set({xys: [0, 0, 1]})}
                        style={{transform: props.xys.interpolate(trans)}}
                    />
                </Carousel.Item>
            )
        })
    };

    return(
        <div className='popup-gallery-container' ref={_gallery}>
            <FontAwesomeIcon
                icon='times-circle'
                onClick = {() => closeGallery()}
            />
            <Carousel indicators={false}>
                {renderPhotos()}
            </Carousel>
        </div>
    )

};