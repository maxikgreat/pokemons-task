
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import {getAbilityById} from "../redux/abilities/abilitiesState";
import {showAlert, hideAlert} from "../redux/alert/alertState";
import {ErrorPage} from "../components/ErrorPage";
import {Loader} from "../components/UI/Loader";

export const Ability = () => {

    const ability = useSelector(state => state.ability);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAbilityById(id, {showAlert, hideAlert}));
    }, []);

    if(ability.error){
        return(
            <ErrorPage message = {ability.error} />
        )
    }

    return(

        <section className='section-ability-one'>
            {
                ability.loading
                ? <Loader/>
                : <h1>Ability page</h1>
            }
        </section>
    )
};