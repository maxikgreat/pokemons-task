

import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAbilitiesById} from "../redux/pokemons/activeState";

export const AbilitiesInPok = ({pokId}) => {

    const abilities = useSelector(state => state.ability);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        console.log(pokId);

        //const skillsId = skills.map(skill => skill.id);
        // console.log(skills);
        // console.log(skillsId);

        dispatch(getAbilitiesById(pokId));
    }, []);

    return(
        <div className='skills-container'>
            {/*{renderAbilities()}*/}
        </div>
    )

};

