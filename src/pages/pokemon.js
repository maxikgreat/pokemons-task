

import React, {useContext, useEffect} from 'react'
import {Gallery} from "../components/Gallery";
import {useParams} from 'react-router-dom'
import {Loader} from "../components/UI/Loader";

export const Pokemon = () => {

    const {id} = useParams();

    return(
        <h1>POKEMON = {id}</h1>
    )

    // useEffect(() => {
    //     getPokemonById(id);
    // }, []);
    //
    // return(
    //    <section className='section-pokemon'>
    //        {
    //            pokemons.loading
    //            ? <Loader/>
    //            : <div className='row'>
    //                    <div className='part-left col-5'>
    //                        <div className='gallery-container'>
    //                            {/*<Gallery*/}
    //                            {/*    sprites = {pokemons.activePokemon.sprites}*/}
    //                            {/*/>*/}
    //                            {console.log(pokemons.activePokemon)}
    //                        </div>
    //                    </div>
    //                    <div className='part-right col-7'>
    //                        suka 2
    //                    </div>
    //                </div>
    //        }
    //
    //    </section>
    // )
};
