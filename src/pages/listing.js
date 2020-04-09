
import React, {useState, useEffect} from 'react'
import {Loader} from "../components/UI/Loader";
import {CardCustom} from "../components/CardCustom";
import {Jumbotron, Container} from "react-bootstrap";
import {AlertCustom} from "../components/AlertCustom";
import {Finder} from "../components/Finder";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ListLoader} from "../components/ListLoader";
import {OrderOptions} from "../components/OrderOptions";
//redux
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {fetchList} from "../redux/pokemons/listingState";
import {showAlert, hideAlert} from "../redux/alert/alertState";
import {fetchAbilities} from "../redux/abilities/abilitiesState";


export const Listing = () => {

    const alert = useSelector(state => state.alert);
    const listing = useSelector(state => state.listing);
    const dispatch = useDispatch();

    const [finder, setFinder] = useState('');
    const [order, setOrder] = useState('default');

    useEffect(() => {
        dispatch(fetchAbilities());
        if(listing.ready){
            dispatch(fetchList(listing.count, {showAlert, hideAlert}))
        }
    }, [listing.ready]);


    const renderPoks = () => {

        let sorted = [...listing.listing];

        switch(order){
            case 'name':
                sorted.sort((leftHand, rightHand) => {
                    return leftHand.name.toLowerCase() > rightHand.name.toLowerCase() ? 1 : -1
                });
                break;
            case 'experience':
                sorted.sort((leftHand, rightHand) => {
                    return leftHand.base_experience < rightHand.base_experience ? 1 : -1
                });
                break;
            case 'default':
                sorted = [...listing.listing];
                break;
            default:
                break;
        }

        const filtered = sorted
            .filter(pok => {
                if ((finder.substring(0, finder.length) === pok.name.substring(0, finder.length).toLowerCase())) {
                    return pok
                }
            });

        if(filtered.length <= 0){
            return (
                <div className='empty-container'>
                    <h3>No matches found</h3>
                    <FontAwesomeIcon icon={'sad-cry'} />
                </div>
            )
        }

        return filtered.map((pok, index) => {
            return(
                <CardCustom
                    key = {index}
                    id={pok.id}
                    name = {pok.name}
                    abilities={pok.abilities}
                    base_exp = {pok.base_experience}
                    sprites = {pok.sprites}
                    types = {pok.types}
                />)
        });

    };

    return(
        <section className='section-listing'>
            <AlertCustom
                alert = {alert}
            />
            <Jumbotron fluid>
                <Container>
                    <h1>Pokemon Application</h1>
                    <p>
                        Application was created special for <span className = 'special-text'>Summer e-Xperience 2020</span>
                    </p>
                </Container>
            </Jumbotron>
            <div className='options-container'>
                <Finder
                    finder = {finder}
                    setFinder = {setFinder}
                />
                <ListLoader
                    maxCount = {listing.maxCount}
                    showAlert ={showAlert}
                    hideAlert={hideAlert}
                    fetchList = {fetchList}
                    dispatch = {dispatch}
                />
                <OrderOptions
                    setOrder = {setOrder}
                />
            </div>
            { listing.loading
                ? <Loader />
                : <div className='listing-container row'>
                    {renderPoks()}
                </div>
            }
        </section>
    )
};
