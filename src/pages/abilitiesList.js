

import React, {useEffect} from 'react';
import {Card, Button, Jumbotron, Container} from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux";
import {Loader} from "../components/UI/Loader";
import {fetchAbilities} from "../redux/abilities/abilitiesState";

export const AbilitiesList = () => {

    const ability = useSelector(state => state.ability);
    const dispatch = useDispatch();

    useEffect(() => {
        if(ability.listing.length === 0){
            dispatch(fetchAbilities());
        }
    },[]);

    const renderAbilities = () => {
        return ability.listing.map((ability, index) => {
            return(
                <div className="skill-container" key={index} style={{}}>
                    <Card border={ability.color}>
                        <img src={ability.img} alt="Skill"/>
                        <Card.Body>
                            <Card.Title>{ability.name.replace("-", ' ').toUpperCase()}</Card.Title>
                            <Button variant={ability.color}>More</Button>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
    };

    return(
        <section className='section-abilities'>
            <Jumbotron fluid>
                <Container>
                    <h1>Full list of abilities</h1>
                    <p>
                        You can <span className = 'special-text'>click</span> on anyone, to see more
                    </p>
                </Container>
            </Jumbotron>
            {
                ability.loading
                ? <Loader/>
                :<div className='abilities-container row'>
                        {renderAbilities()}
                </div>
            }
        </section>

    )
};