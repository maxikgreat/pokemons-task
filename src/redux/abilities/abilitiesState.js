import axios from 'axios'
import {FETCH_ABILITIES_LIST, SHOW_LOADER_ABILITIES, HIDE_LOADER_ABILITIES} from "../actionTypes";


export const fetchAbilities = () => {
    return async dispatch => {
        dispatch({
            type: SHOW_LOADER_ABILITIES
        });
        //add custom icons to abilities and colors
        const iconsSrc = require.context('../../assets/images/skills/', false, /\.(svg)$/);
        const skillsIconsSrc = [];
        iconsSrc.keys().map(iconsSrc).forEach(item => {
            skillsIconsSrc.push(item);
        });
        const colors = ['success', 'warning', 'danger', 'primary', 'secondary'];

        let baseUrl = "https://pokeapi.co/api/v2/ability";

        await axios.get(baseUrl)
            .then(response => {
                const maxCount = response.data.count;
                return axios.get(baseUrl + '?limit=100')
                    .then(response => {
                        const abilities = response.data.results;
                        for (let i = 0; i < abilities.length; i++){
                            abilities[i].id = i;
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
    }
};


