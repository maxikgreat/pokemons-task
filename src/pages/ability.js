
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {getAbilityById} from "../redux/abilities/abilitiesState";
import {showAlert, hideAlert} from "../redux/alert/alertState";
import {ErrorPage} from "../components/ErrorPage";
import {Loader} from "../components/UI/Loader";

export const Ability = () => {

    const ability = useSelector(state => state.ability);
    const {id} = useParams();
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getAbilityById(id, {showAlert, hideAlert}));
    }, []);

    const findImage = () => {
        const founded = ability.listing.find(item => item.id === Number(id));
        return (
            <div className='ability-img-container'>
                <img src={founded.img} alt = "Skill" />
            </div>
        )
    };

    const findDescWithColor = () => {
        const founded = ability.listing.find(item => item.id === Number(id));
        return (
            <div className= {`desc-container border border-${founded.color}`}>
                <h1 className={`text-${founded.color}`}>{ability.activeAbility.name.replace("-", ' ').toUpperCase()}</h1>
                <p>{ability.activeAbility.effect_entries[0].effect}</p>
            </div>
        )
    };

    const renderPoks = () => {
        return ability.poksWithAbilities.map((pok, index) => {
            return (
                <Link key={index} to={`/pokemon/${pok.id}`}>
                    <div className='familiar'>
                        <img src={pok.sprites.front_default} alt="Pokemon" />
                        <span>{pok.name.toUpperCase()}</span>
                    </div>
                </Link>
            )
        });
    };

    if(ability.error){
        return(
            <ErrorPage message = {ability.error} />
        )
    }

    return(

        <section className='section-ability-one'>
            {
                ability.loading || ability.loadingAbility
                ? <Loader /> :
                    <>
                        <div className='row border-bottom border-success mb-3 p-3'>
                            <div className='col-md-5 col-12 d-flex align-items-center justify-content-center'>
                                {findImage()}
                            </div>
                            <div className='col-md-7 col-12 d-flex align-items-center'>
                                {findDescWithColor()}
                            </div>
                        </div>
                        <div className='also-have-container'>
                            <h2>Pokemons who have this ability</h2>
                            <div className='familiar-pokemons'>
                                {renderPoks()}
                            </div>
                        </div>
                    </>
            }
        </section>
    )
};