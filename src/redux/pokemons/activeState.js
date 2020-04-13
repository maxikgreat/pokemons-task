

import {
    SET_ACTIVE_POKEMON,
    HIDE_LOADER_POKEMON,
    SHOW_LOADER_POKEMON,
    GET_POKEMON_ABILITIES,
    SET_POKEMON_ERROR,
    CLEAR_POKEMON_ERROR,
    GET_EVOLUTION_CHAIN
} from "../actionTypes";
import axios from "axios";

export const setActive = (id, callback) => {

    return async dispatch => {

        dispatch({
            type: CLEAR_POKEMON_ERROR
        });

        dispatch({
            type: SHOW_LOADER_POKEMON
        });

        let baseUrl = `https://pokeapi.co/api/v2/pokemon/`;

        let activePokGlobal = {};

        await axios.get(baseUrl + id)
            .then(response => {
                activePokGlobal = {...response.data};

                let name = activePokGlobal.name;
                let base_exp = activePokGlobal.base_experience;
                let sprites = activePokGlobal.sprites;
                let stats = activePokGlobal.stats;

                return axios.get(activePokGlobal.species.url)
                    .then(response => {
                        let species = {...response.data};
                        dispatch({
                            type: SET_ACTIVE_POKEMON,
                            payload: {id, name, base_exp, sprites, stats, species}
                        });
                        dispatch(getAbilitiesOfPokemonById(id));
                        return axios.get(species.evolution_chain.url)
                            .then((response) => {
                                let chainArr = getEvolution(response.data.chain);
                                let pokId = chainArr.map(item => {
                                   return item.url.match((/\/+[0-9]+\//g))[0].replace(/\//g, '')
                                });
                                return pokId.map(id => {
                                   return axios.get(baseUrl + id)
                                       .then(res => {
                                           return res.data
                                       })
                                });
                            })
                            .then(arrayOfPromises => {
                                Promise.all(arrayOfPromises)
                                    .then(data => {
                                        let chainArr = [];
                                        data.forEach(pok => {
                                            chainArr.push({
                                                id: pok.id,
                                                name: pok.name,
                                                sprite: pok.sprites.front_default
                                            })
                                        });
                                        dispatch({
                                            type: GET_EVOLUTION_CHAIN,
                                            payload: chainArr
                                        });
                                        dispatch({
                                            type: HIDE_LOADER_POKEMON
                                        });
                                    })
                            })

                    });

            })
            .catch(e => {
                dispatch({
                    type: SET_POKEMON_ERROR,
                    payload: 'Maybe pokemon you try to find not exist'
                });
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

export const getAbilitiesOfPokemonById = (id) => {
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
                        });

                    });
            })
    }

};

export const getEvolution = (chain, chainArr = []) => {
    chainArr.push(chain.species);
    if(chain.evolves_to.length > 0){
        return getEvolution(chain.evolves_to[0], chainArr);
    } else {
        return chainArr;
    }
};
