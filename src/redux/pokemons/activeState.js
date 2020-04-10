

import {SET_ACTIVE_POKEMON, HIDE_LOADER_POKEMON, SHOW_LOADER_POKEMON, GET_POKEMON_ABILITIES} from "../actionTypes";
import axios from "axios";

export const setActive = (id, callback) => {

    return async dispatch => {

        dispatch({
            type: SHOW_LOADER_POKEMON
        });

        let baseUrl = `https://pokeapi.co/api/v2/pokemon/${id}`;

        let activePokGlobal = {};
        let activePok = {};

        activePok.id = id;

        await axios.get(baseUrl)
            .then(response => {
                activePokGlobal = {...response.data};

                activePok.name = activePokGlobal.name;
                activePok.base_exp = activePokGlobal.base_experience;
                activePok.sprites = activePokGlobal.sprites;
                activePok.stats = activePokGlobal.stats;

                return axios.get(activePokGlobal.species.url)
                    .then(response => {
                        activePok.species = {...response.data};
                        dispatch({
                            type: SET_ACTIVE_POKEMON,
                            payload: activePok
                        });
                        dispatch({
                            type: HIDE_LOADER_POKEMON
                        })
                    });

            })
            .catch(e => {
                dispatch(callback.showAlert('danger', `Error! ${e.message}`));
                setTimeout(() => {
                    dispatch(callback.hideAlert());
                }, 3000);
                dispatch({
                    type: HIDE_LOADER_POKEMON
                });
            });
    }
};

export const getAbilitiesById = (id) => {
    return async dispatch => {

        let baseUrl = "https://pokeapi.co/api/v2/pokemon/" + id;

        await axios.get(baseUrl)
            .then(response => {
                return response.data.abilities.map(({ability}) => {
                    return axios.get(ability.url)
                        .then(response => {
                            return response.data
                        })
                })
            })
            .then(arrayOfPromises => {
                Promise.all(arrayOfPromises)
                    .then(data => {
                        dispatch({
                            type: GET_POKEMON_ABILITIES,
                            payload: data
                        })
                    });
            })
    }

};
