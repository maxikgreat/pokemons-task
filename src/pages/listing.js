
import React, {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import {Loader} from "../components/UI/Loader";
import {CardCustom} from "../components/CardCustom";
import {Jumbotron, Container} from "react-bootstrap";
import {AlertCustom} from "../components/AlertCustom";
import {Finder} from "../components/Finder";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ListLoader} from "../components/pokemon/ListLoader";
import {OrderOptions} from "../components/pokemon/OrderOptions";
//redux
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {fetchList} from "../redux/pokemons/listingState";
import {showAlert, hideAlert} from "../redux/alert/alertState";
import {PaginationCustom} from "../components/PaginationCustom";

export const Listing = () => {

    const alert = useSelector(state => state.alert);
    const listing = useSelector(state => state.listing);
    const dispatch = useDispatch();

    const _listingContainer = useRef();

    const [finder, setFinder] = useState('');
    const [order, setOrder] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);

    let filtered = [];

    //pagination
    const itemsPerPage = 10;
    const indexOfLast = currentPage * itemsPerPage;
    const indexOfFirst = indexOfLast - itemsPerPage;


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


        filtered = sorted
            .filter(pok => {
                if ((finder.substring(0, finder.length).toLowerCase() === pok.name.substring(0, finder.length).toLowerCase())) {
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

        const currentItems = filtered.slice(indexOfFirst, indexOfLast);

        return currentItems.map((pok, index) => {
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
                    <Link to = '/abilities'>
                        <button className='btn btn-success toggleToPage'>Abilities</button>
                    </Link>

                </Container>

            </Jumbotron>
            <div className='options-container'>
                <Finder
                    title = "Find pokemon"
                    finder = {finder}
                    setFinder = {setFinder}
                    setPage = {setCurrentPage}
                />
                <ListLoader
                    maxCount = {listing.maxCount}
                    showAlert = {showAlert}
                    hideAlert= {hideAlert}
                    fetchList = {fetchList}
                    dispatch = {dispatch}
                />
                <OrderOptions
                    setOrder = {setOrder}
                />
            </div>
            { listing.loading
                ? <Loader />
                : <div className='listing-container row' ref={_listingContainer}>
                    {renderPoks()}
                    {
                        filtered.length !== 0 && listing.listing !== 0
                        ? <PaginationCustom
                                fullList = {finder !== '' ? filtered : listing.listing}
                                itemsPerPage = {itemsPerPage}
                                currentPage = {currentPage}
                                setGlobalPages = {setCurrentPage}
                                container = {_listingContainer.current}
                            />
                            :null
                    }

                </div>
            }

        </section>
    )
};
