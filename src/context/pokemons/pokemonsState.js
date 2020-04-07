
import React, {useReducer} from 'react'
import axios from 'axios'
import {
    FETCH_MAIN_LIST, GET_ACTIVE_POKEMON,
    GET_MAX_COUNT,
    HIDE_ALERT,
    HIDE_LOADER,
    READY_TO_LOAD, SET_POKEMONS_COUNT,
    SHOW_ALERT,
    SHOW_LOADER
} from "../types";
import {pokemonsReducer} from "./pokemonsReducer";
import {PokemonsContext} from "./pokemonsContext";

const initialState = {
    alert: {
        show: false,
        variant: '',
        message: ''
    },
    ready: false,
    maxCount: null,
    count: 20, // default
    loading: true,
    listing: [],
    activePokemon: null
};

export const PokemonState = ({children}) => {

    const [state, dispatch] = useReducer(pokemonsReducer, initialState);

    const fetchList = async (limit = 20) => {

        dispatch({
            type: SET_POKEMONS_COUNT,
            payload: limit
        });

        dispatch({
            type: SHOW_LOADER
        });

        let baseUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;

        await axios.get(baseUrl)
            .then((response) => {
                dispatch({
                    type: GET_MAX_COUNT,
                    payload: response.data.count
                });
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
                        dispatch({
                            type: HIDE_LOADER
                        });
                        showAlert('success', "Pokemon's list loaded. Have a fun :)");
                    })
            })
            .catch(e => {
                showAlert('danger', "Error during connecting with API");
                dispatch({
                    type: HIDE_LOADER
                })
            });

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

    const setCount = (value) => {
        dispatch({
            type: SET_POKEMONS_COUNT,
            payload: value
        })
    };

    const setActive = (pok) => {
        dispatch({
            type: GET_ACTIVE_POKEMON,
            payload: pok
        })
    };

    const ready = () => {
        dispatch({
            type: READY_TO_LOAD
        })
    };

    return (
        <PokemonsContext.Provider value={{showAlert, ready, fetchList, setCount, setActive, pokemons: state}}>
            {children}
        </PokemonsContext.Provider>
    )
};