import axios from 'axios'
import {
    FETCH_ABILITIES_LIST,
    HIDE_LOADER_ABILITY,
    HIDE_LOADER_ABILITIES,
    CLEAR_ABILITY_ERROR,
    SET_ACTIVE_ABILITY,
    SET_ABILITY_ERROR,
    GET_POKS_WITH_ABILITY, SHOW_LOADER_ABILITY
} from "../actionTypes";

//add custom icons to abilities and colors
const iconsSrc = require.context('../../assets/images/skills/', false, /\.(svg)$/);

export const fetchAbilities = () => {
    return async dispatch => {

        const skillsIconsSrc = [];
        iconsSrc.keys().map(iconsSrc).forEach(item => {
            skillsIconsSrc.push(item);
        });
        const colors = ['success', 'warning', 'danger', 'primary', 'secondary'];

        let baseUrl = "https://pokeapi.co/api/v2/ability";

        await axios.get(baseUrl)
            .then(response => {
                const maxCount = response.data.count;
                return axios.get(baseUrl + '?limit=' + maxCount)
                    .then(response => {
                        const abilities = response.data.results;
                        for (let i = 0; i < abilities.length; i++){
                            abilities[i].id = i+1;
                            abilities[i].img = skillsIconsSrc[i];
                            abilities[i].color = colors[Math.floor(Math.random() * 5)];
                        }
                        dispatch({
                            type: FETCH_ABILITIES_LIST,
                            payload: [...abilities]
                        });
                        dispatch({
                            type: HIDE_LOADER_ABILITIES
                        })
                    })
            })
            .catch(e => {
                dispatch({
                    type: SET_ABILITY_ERROR,
                    payload: 'Problems fetching listing of abilities'
                });
            })
    }
};


export const getAbilityById = (id, callback) => {
    return async dispatch => {

        dispatch({
            type:CLEAR_ABILITY_ERROR
        });

        dispatch({
            type: SHOW_LOADER_ABILITY
        });


        let baseUrl = "https://pokeapi.co/api/v2/ability/" + id;

        await axios.get(baseUrl)
            .then((response) => {
                let globalData = response.data
                dispatch({
                    type: SET_ACTIVE_ABILITY,
                    payload: response.data
                });
                const arrayOfPromises = response.data.pokemon.map(pok => {
                    return axios.get(pok.pokemon.url)
                        .then(response => response)
                });
                Promise.all(arrayOfPromises)
                    .then(res => {
                        let poksWithAbilities = [];
                        res.forEach(res => {
                            poksWithAbilities.push(res.data);
                        });
                        dispatch({
                            type: GET_POKS_WITH_ABILITY,
                            payload: poksWithAbilities
                        });
                        dispatch({
                            type: HIDE_LOADER_ABILITY
                        })
                    });



            })
            .catch(e => {
                dispatch({
                    type: SET_ABILITY_ERROR,
                    payload: 'Ability that you try to find not exist'
                });
                dispatch(callback.showAlert('danger', `Error! ${e.message}`));
                setTimeout(() => {
                    dispatch(callback.hideAlert());
                }, 3000);
            });
    }
};



