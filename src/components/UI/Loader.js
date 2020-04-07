
import React from 'react'
import splash from '../../assets/images/splash.gif'

export const Loader = ({readyToFetch, dispatch}) => {

    return(
        <div className='splash-container'>
            <img
                src={splash}
                alt='Loading...'
                onLoad={() => dispatch(readyToFetch())}
            />
            <p>Catching pokemons...</p>
        </div>
    )
};