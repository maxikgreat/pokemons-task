

import React from 'react'
import {Link} from 'react-router-dom'
import errorImg from '../assets/images/error.png'
import {useSelector} from "react-redux";
import {AlertCustom} from "./AlertCustom";

export const ErrorPage = ({message}) => {

    const alert = useSelector(state => state.alert);

    return(
        <section className='error-container'>
            <AlertCustom alert = {alert}/>
            <h2>Ops! Something went wrong!</h2>
            <h3>{message}</h3>
            <img src={errorImg} alt='Error' className='mb-2'/>
            <div className='buttons-container'>
                <Link to='/'>
                    <button className='btn btn-success'>Pokemons</button>
                </Link>
                <Link to='/abilities'>
                    <button className='btn btn-success'>Abilities</button>
                </Link>
            </div>
        </section>
    )

};