

import React, {useState, useRef} from 'react';
import {Card, Button, Jumbotron, Container} from 'react-bootstrap'
import {useSelector} from "react-redux";
import {Loader} from "../components/UI/Loader";
import {PaginationCustom} from "../components/PaginationCustom";
import {Finder} from "../components/Finder";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

export const AbilitiesList = () => {

    const ability = useSelector(state => state.ability);

    const [finder, setFinder] = useState('');
    const [currentPage, setCurrentPage] = useState(1);

    const _listingContainer = useRef();

    const itemsPerPage = 20;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;

    let filtered = [];

    const renderAbilities = () => {

        filtered = ability.listing.filter(pok => {
                if ((finder.substring(0, finder.length).toLowerCase() === pok.name.substring(0, finder.length).toLowerCase())) {
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
                <div className="skill-container" key={index}>
                    <Card border={ability.color}>
                        <img src={ability.img} alt="Skill"/>
                        <Card.Body>
                            <Card.Title>{ability.name.replace("-", ' ').toUpperCase()}</Card.Title>
                            <Link to={`/ability/${ability.id}`}>
                                <Button variant={ability.color}>More</Button>
                            </Link>
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
                    setPage = {setCurrentPage}
                />
            </div>
            {
                ability.loading
                ? <Loader/>
                :<div className='abilities-container row' ref={_listingContainer}>
                        {renderAbilities()}
                        {
                            filtered.length !== 0
                                ?  <PaginationCustom
                                    fullList = {finder ? filtered : ability.listing}
                                    itemsPerPage = {itemsPerPage}
                                    currentPage={currentPage}
                                    setGlobalPages = {setCurrentPage}
                                    container={_listingContainer.current}
                                />
                                :null
                        }

                </div>
            }
        </section>

    )
};