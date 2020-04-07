

import React, {useEffect} from 'react'
import {Gallery} from "../components/Gallery";
import {useParams} from 'react-router-dom'
import {Loader} from "../components/UI/Loader";
import {useSelector, useDispatch} from "react-redux";
import {setActive} from '../redux/pokemons/pokemonsState'

export const Pokemon = () => {

    const pokemons = useSelector(state => state.pokemons);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        console.log(id);
        dispatch(setActive(id));
    }, []);

    return(
       <section className='section-pokemon'>
           {
               pokemons.loading
               ? <Loader/>
               : <div className='row'>
                       <div className='part-left col-5'>
                           {/*<div className='gallery-container'>*/}
                           {/*    <Gallery*/}
                           {/*        sprites = {pokemons.activePokemon.sprites}*/}
                           {/*    />*/}
                           {/*    {console.log(pokemons.activePokemon)}*/}
                           {/*</div>*/}
                       </div>
                       <div className='part-right col-7'>
                           suka 2
                       </div>
                   </div>
           }
       </section>
    )
};
