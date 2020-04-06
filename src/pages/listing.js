
import React, {useContext, useRef} from 'react'
import {PokemonsContext} from "../context/pokemons/pokemonsContext";
import {Loader} from "../components/UI/Loader";
import {CardCustom} from "../components/CardCustom";
import {Jumbotron, Container} from "react-bootstrap";
import {AlertCustom} from "../components/AlertCustom";
import {Finder} from "../components/UI/Finder";


export const Listing = () => {

    const {fetchList, pokemons} = useContext(PokemonsContext);

    const _pokemonsContainer = useRef();

    const renderPoks = () => {
        return pokemons.listing.map((pok, index) => {
            return(
                <CardCustom
                    key = {index}
                    name = {pok.name}
                    abilities={pok.abilities}
                    base_exp = {pok.base_experience}
                    sprites = {pok.sprites}
                    types = {pok.types}
                />
            )
        })
    };

    return(

        <section className='section-listing'>
            <AlertCustom
                alert = {pokemons.alert}
            />
            <Jumbotron fluid>
                <Container>
                    <h1>Pokemon Application</h1>
                    <p>
                        Application was created special for <span className = 'special-text'>Summer e-Xperience 2020</span>
                    </p>
                </Container>
            </Jumbotron>
            <div className='options-container'>
                <Finder
                    poks = {pokemons.listing}
                    parentContainer = {_pokemonsContainer.current}
                />
            </div>
            { pokemons.loading
                ? <Loader/>
                :  <div className='listing-container row' ref={_pokemonsContainer}>
                        {renderPoks()}
                    </div>
            }
        </section>
    )
};
