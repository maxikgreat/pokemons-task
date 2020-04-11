

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
import {formSkills} from "../helpFunctions/formSkills";
import {AlertCustom} from "../components/AlertCustom";
import {ErrorPage} from "../components/ErrorPage";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Pokemon = () => {

    const alert = useSelector(state => state.alert);
    const abilities = useSelector(state => state.ability);
    const pokemon = useSelector(state => state.pokemon);
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        dispatch(setActive(id, {showAlert, hideAlert}));
    }, [id]);

    if(pokemon.error){
        return(
            <>
                <AlertCustom alert = {alert}/>
                <ErrorPage message = {pokemon.error} />
            </>
        )
    }

    return(
       <section className='section-pokemon'>
           {
               pokemon.loading || abilities.loading
               ? <Loader/>
               : <>
                   <div className='row d-flex align-items-center mb-5 border-bottom border-success'>
                       <div className='col-md-5 col-12'>
                           <Gallery
                               sprites = {pokemon.sprites}
                           />
                           <div className={'name'}>
                               <h2>{pokemon.name.toUpperCase()}</h2>
                               <div className='add-info'>
                                   <div className='add-info--gender-rate'>
                                       <FontAwesomeIcon icon='star-half-alt' />
                                       <span>{pokemon.species.gender_rate}</span>
                                   </div>
                                   <div className='add-info--capture-rate'>
                                       <FontAwesomeIcon icon='map-pin' />
                                       <span>{pokemon.species.capture_rate}</span>
                                   </div>
                                   {
                                       pokemon.species.is_baby
                                       ? <div className='add-info--is-baby'>
                                               <FontAwesomeIcon icon ='baby-carriage' />
                                           </div>
                                           : null
                                   }

                               </div>

                           </div>

                       </div>
                       <div className='col-md-7 col-12'>
                           <Stats
                               stats = {formStats(pokemon)}
                           />
                       </div>
                   </div>
                   <div className='row'>
                       <div className='col-md-5 col-12'>
                           <AbilitiesInPok
                               skills = {formSkills(pokemon.abilities, abilities.listing)}
                           />
                       </div>
                       <div className='col-md-7 col-12'>

                       </div>
                   </div>
                   </>
           }
       </section>
    )
};
