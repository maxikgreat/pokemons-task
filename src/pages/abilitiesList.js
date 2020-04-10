

import React, {useEffect, useState} from 'react';
import {Card, Button, Jumbotron, Container} from 'react-bootstrap'
import {useSelector, useDispatch} from "react-redux";
import {Loader} from "../components/UI/Loader";
import {fetchAbilities} from "../redux/abilities/abilitiesState";
import {PaginationCustom} from "../components/PaginationCustom";
import {Finder} from "../components/Finder";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export const AbilitiesList = () => {

    const ability = useSelector(state => state.ability);
    const dispatch = useDispatch();

    const [finder, setFinder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 20;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;

    let filtered = [];

    useEffect(() => {
        if(ability.listing.length === 0){
            dispatch(fetchAbilities());
        }
    },[]);

    const renderAbilities = () => {

        filtered = ability.listing.filter(pok => {
                if ((finder.substring(0, finder.length) === pok.name.substring(0, finder.length).toLowerCase())) {
                    return pok
                }
            });

        if(filtered.length <= 0){
            return (
                <div className='empty-container'>
                    <h3>No matches found</h3>
                    <FontAwesomeIcon icon={'sad-cry'} />
                </div>
            )
        }

        const currentItems = filtered.slice(indexOfFirst, indexOfLast);

        return currentItems.map((ability, index) => {
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
                    <h1>Full list of <span className = 'special-text'>abilities</span></h1>
                    <p>
                        You can <span className = 'special-text'>click</span> on anyone, to see more
                    </p>
                    <Link to='/'>
                        <button className='btn btn-success'>Pokemons</button>
                    </Link>
                </Container>
            </Jumbotron>
            <div className="options-container">
                <Finder
                    title="Find ability"
                    finder={finder}
                    setFinder={setFinder}
                />
            </div>
            {
                ability.loading
                ? <Loader/>
                :<div className='abilities-container row'>
                        {renderAbilities()}
                        <PaginationCustom
                            fullList = {finder ? filtered : ability.listing}
                            itemsPerPage = {itemsPerPage}
                            setGlobalPages = {setCurrentPage}
                        />
                </div>
            }
        </section>

    )
};