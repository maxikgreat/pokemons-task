

import React, {useEffect} from 'react'
import {Gallery} from "../components/Gallery";
import {useParams} from 'react-router-dom'
import {Loader} from "../components/UI/Loader";
import {useSelector, useDispatch} from "react-redux";
import {showAlert, hideAlert} from "../redux/alert/alertState";
import {setActive} from '../redux/pokemons/activeState'
import {Stats} from "../components/Stats";
import {formStats} from "../helpFunctions/formStats";

export const Pokemon = () => {

    const pokemon = useSelector(state => state.pokemon);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(setActive(id, {showAlert, hideAlert}));
    }, []);

    return(
       <section className='section-pokemon'>
           {
               pokemon.loading
               ? <Loader/>
               : <>
                   <div className='row'>
                       <div className='col-5'>
                           <Gallery
                               sprites = {pokemon.activePokemon.sprites}
                           />
                       </div>
                       <div className='col-7'>
                           <Stats
                               stats = {formStats(pokemon.activePokemon)}
                           />
                       </div>
                   </div>
                   <div className='row'>
                       <h1>Abilities</h1>
                   </div>
                   </>
           }
       </section>
    )
};
