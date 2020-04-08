

import {SET_ACTIVE_POKEMON, HIDE_LOADER, SHOW_LOADER} from "../actionTypes";
import axios from "axios";

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
                            type: SET_ACTIVE_POKEMON,
                            payload: {
                                name: activePok.name,
                                base_exp: activePok.base_experience,
                                sprites: activePok.sprites,
                                species: {...activePok.species},
                                stats: activePok.stats
                            }
                        });
                        console.log(activePok);
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