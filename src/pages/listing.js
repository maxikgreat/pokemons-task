
import React, {useContext, useState, useEffect} from 'react'
import {PokemonsContext} from "../context/pokemons/pokemonsContext";
import {Loader} from "../components/UI/Loader";
import {CardCustom} from "../components/CardCustom";
import {Jumbotron, Container} from "react-bootstrap";
import {AlertCustom} from "../components/AlertCustom";
import {Finder} from "../components/Finder";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ListLoader} from "../components/ListLoader";


export const Listing = () => {

    const {showAlert, fetchList, pokemons} = useContext(PokemonsContext);

    const [finder, setFinder] = useState('');

    useEffect(() => {
        if(pokemons.ready){
            fetchList(20); // default count
        }
    }, [pokemons.ready]);


    const renderPoks = () => {
        const filtered = pokemons.listing
            .filter(pok => {
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

        return filtered.map((pok, index) => {
            return(
                <CardCustom
                    key = {index}
                    id={pok.id}
                    name = {pok.name}
                    abilities={pok.abilities}
                    base_exp = {pok.base_experience}
                    sprites = {pok.sprites}
                    types = {pok.types}
                />)
        });

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
                    finder = {finder}
                    setFinder = {setFinder}
                />
                <ListLoader
                    maxCount = {pokemons.maxCount}
                    showAlert ={showAlert}
                    fetchList = {fetchList}
                />
            </div>
            { pokemons.loading
                ? <Loader/>
                : <div className='listing-container row'>
                    {renderPoks()}
                </div>
            }
        </section>
    )
};
