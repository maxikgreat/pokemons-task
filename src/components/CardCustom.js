

import React, {useState} from 'react'
import {Card, Button, ProgressBar, Badge} from 'react-bootstrap'
import {PopupGallery} from "./PopupGallery";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export const CardCustom = ({name, id, abilities, base_exp, sprites, types}) => {

    const [galleryVisible, setGalleryVisible] = useState(false);

    const openGallery = () => {
        document.body.style.overflowY = 'hidden';
        document.body.style.position = 'relative';
        setGalleryVisible(true);
    };

    const filterSprites = (sprites) => {
        const filteredSprites = [];
        Object.values(sprites).forEach(sprite => {
            if(sprite) {
                filteredSprites.push(sprite);
            }
        });
        return filteredSprites
    };

    const renderTypes = () => {
        return types.map(({type}, index) => {
            return (
                <Badge
                    key={index}
                    variant={'primary'}
                    className={'mb-2 mr-1'}
                >{type.name.toUpperCase()}
                </Badge>
            )
        })
    };


    return(
        <>
            {
                galleryVisible ?
                    <PopupGallery
                        setVisible = {setGalleryVisible}
                        sprites={filterSprites(sprites)}
                    /> : null
            }
            <div className='card-container col-12 col-sm-6 col-md-4 col-lg-3'>
                <Card>
                    <Card.Img
                        variant="top"
                        src={sprites.front_default}
                        onClick = {() => {openGallery()}}
                    />
                    <Card.Body>
                        <Card.Title>
                            {name.toUpperCase()}
                            <div className="abilities-container" title="Abilities">
                                <FontAwesomeIcon icon={'meteor'} /> x {abilities.length}
                            </div>
                        </Card.Title>
                        {renderTypes()}
                        <ProgressBar
                            now={base_exp}
                            variant={base_exp < 100 ? 'danger' : base_exp > 100 && base_exp < 200 ? 'warning' : 'success'}
                            label={`${base_exp} exp.`}
                            max={300}
                            className={'mb-2'}
                        />
                        <Link
                            to={`/pokemon/${id}`}
                        >
                            <Button variant="success">Pick</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
};