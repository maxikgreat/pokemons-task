
import React from 'react'
import splash from '../../assets/images/splash.gif'
import {setReadyToFetch} from "../../redux/pokemons/pokemonsState";
import {useDispatch} from "react-redux";

export const Loader = () => {

    const dispatch = useDispatch();

    return(
        <div className='splash-container'>
            <img
                src={splash}
                alt='Loading...'
                onLoad={() => dispatch(setReadyToFetch())}
            />
            <p>Catching pokemons...</p>
        </div>
    )
};