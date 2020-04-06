
import React, {useReducer} from 'react'
import axios from 'axios'
import {FETCH_MAIN_LIST, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT} from "../types";
import {pokemonsReducer} from "./pokemonsReducer";
import {PokemonsContext} from "./pokemonsContext";

const initialState = {
    alert: {
        show: false,
        variant: '',
        message: ''
    },
    loading: true,
    listing: []
};

export const PokemonState = ({children}) => {

    const [state, dispatch] = useReducer(pokemonsReducer, initialState);

    const fetchList = async (limit = 20) => {

        let baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

        await axios.get(baseUrl)
            .then((response) => {
                const pokUrls = response.data.results;
                return pokUrls.map(pok => {
                    return axios.get(pok.url)
                        .then(response => {
                            return response.data
                        })
                })
            })
            .then(arrayOfPromises => {
                Promise.all(arrayOfPromises)
                    .then(data => {
                        const listing = [];
                        data.forEach(item => {
                            //get only needed properties
                            listing.push({
                                id: item.id,
                                name: item.name,
                                abilities: item.abilities,
                                base_experience: item.base_experience,
                                sprites: item.sprites,
                                types: item.types
                            })
                        });
                        dispatch({
                            type: FETCH_MAIN_LIST,
                            payload: listing
                        });
                        showAlert('success', "Pokemon's list loaded. Have a fun :)");
                    })
            })
            .catch(e => {
                showAlert('danger', "Error during connecting with API");
            });
        dispatch({
            type: HIDE_LOADER
        })
    };

    const showAlert = (variant, message) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                show: true,
                variant,
                message
            }
        });
        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 3000);
    };

    return (
        <PokemonsContext.Provider value={{fetchList, pokemons: state}}>
            {children}
        </PokemonsContext.Provider>
    )
};