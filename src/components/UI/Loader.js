
import React, {useContext} from 'react'
import splash from '../../assets/images/splash.gif'
import {PokemonsContext} from "../../context/pokemons/pokemonsContext";

export const Loader = () => {

    const {ready} = useContext(PokemonsContext);

    return(
        <div className='splash-container'>
            <img
                src={splash}
                alt='Loading...'
                onLoad={() => ready()}
            />
            <p>Catching pokemons...</p>
        </div>
    )
};