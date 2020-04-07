import {
    FETCH_MAIN_LIST, GET_ACTIVE_POKEMON,
    GET_MAX_COUNT,
    HIDE_LOADER,
    READY_TO_LOAD,
    SET_POKEMONS_COUNT,
    SHOW_LOADER
} from "../actionTypes";
import axios from "axios";

export const setReadyToFetch = () => {
    return({
        type: READY_TO_LOAD
    })
};

export const fetchList = (limit = 20, callBack) => {
    return async dispatch => {

        dispatch({
            type: SHOW_LOADER
        });

        dispatch({
            type: SET_POKEMONS_COUNT,
            payload: limit
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
                        dispatch(callBack.showAlert('success', "Pokemons list loaded. Have a fun :)"));
                        setTimeout(() => {
                            dispatch(callBack.hideAlert());
                        }, 3000)
                    })
            })
            .catch(e => {
                dispatch({
                    type: HIDE_LOADER
                });
                dispatch(callBack.showAlert('danger', "Problems with API or Internet connection"));
                setTimeout(() => {
                    dispatch(callBack.hideAlert());
                }, 3000)
            });
    }
};

export const setActive = (id, callback) => {
    return async dispatch => {

        dispatch({
            type: SHOW_LOADER
        });

        let baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

        let activePok = {};

        await axios.get(baseUrl)
            .then(response => {
                activePok = {...response.data};
                return axios.get(response.data.species.url)
                    .then(response => {
                        activePok.species = {...response.data};
                        dispatch({
                            type: GET_ACTIVE_POKEMON,
                            payload: activePok
                        });
                        dispatch({
                            type: HIDE_LOADER
                        });
                    })
            })
            .catch(e => {
                dispatch(callback.showAlert('danger', `Error! ${e.message}`));
                setTimeout(() => {
                    dispatch(callback.hideAlert());
                }, 3000);
                dispatch({
                    type: HIDE_LOADER
                });
            })
    }
};