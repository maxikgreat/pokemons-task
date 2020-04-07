

import React, {useContext, useEffect} from 'react'
import {PokemonsContext} from "../context/pokemons/pokemonsContext";
import {Gallery} from "../components/Gallery";

export const Pokemon = () => {

    const {pokemons} = useContext(PokemonsContext);

    const {activePokemon} = pokemons;

    useEffect(() => {
        console.log(activePokemon)
    });

    return(
       <section className='section-pokemon row'>
           <div className='part-left col-5'>
               <div className='gallery-container'>
                   <Gallery/>
               </div>
           </div>
           <div className='part-right col-7'>
                suka 2
           </div>
       </section>
    )
};
