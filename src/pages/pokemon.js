

import React, {useEffect} from 'react'
import {Gallery} from "../components/Gallery";
import {useParams} from 'react-router-dom'
import {Loader} from "../components/UI/Loader";
import {useSelector, useDispatch} from "react-redux";
import {showAlert, hideAlert} from "../redux/alert/alertState";
import {setActive} from '../redux/pokemons/activeState'
import {Stats} from "../components/Stats";
import {formStats} from "../helpFunctions/formStats";
import {AbilitiesInPok} from "../components/AbilitiesInPok";

export const Pokemon = () => {

    const pokemon = useSelector(state => state.pokemon);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(setActive(id, {showAlert, hideAlert}));
    }, [id]);

    return(
       <section className='section-pokemon'>
           {
               pokemon.loading
               ? <Loader/>
               : <>
                   <div className='row d-flex align-items-center'>
                       <div className='col-md-5 col-12'>
                           <Gallery
                               sprites = {pokemon.activePokemon.sprites}
                           />
                       </div>
                       <div className='col-md-7 col-12'>
                           <Stats
                               stats = {formStats(pokemon.activePokemon)}
                           />
                       </div>
                   </div>
                   <div className='row'>
                       <div className='col-4'>
                           <AbilitiesInPok
                               pokId={pokemon.activePokemon.id}
                           />
                       </div>
                       <div className='col-8'>

                       </div>
                   </div>
                   </>
           }
       </section>
    )
};
