
import React, {useContext, useEffect} from 'react'
import {PokemonsContext} from "../context/pokemons/pokemonsContext";
import {Loader} from "../components/UI/Loader";
import {CardCustom} from "../components/CardCustom";
import {Jumbotron, Container} from "react-bootstrap";
import {AlertCustom} from "../components/AlertCustom";


export const Listing = () => {

    const {fetchList, pokemons} = useContext(PokemonsContext);

    useEffect(() => {
        // fetchList();
    },[]);

    const renderPoks = () => {
        return pokemons.listing.map((pok, index) => {
            return(
                <CardCustom
                    key = {index}
                    name = {pok.name}
                />
            )
        })
    };

    return(

        <section className='section-listing'>
            {console.log(pokemons.alert)}
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
            { pokemons.loading
                ? <Loader/>
                :  <div className='listing-container row'>
                        {renderPoks()}
                    </div>
            }
        </section>
    )
};
