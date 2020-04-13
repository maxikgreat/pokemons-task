
import React, {Fragment} from 'react'
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const EvolutionChain = ({evolutionChain}) => {

    const renderChain = () => {
        return evolutionChain.map((item, index) => {
            return(
                <Fragment key={index}>
                    <Link to = {`/pokemon/${item.id}`} className='evol'>
                        <img src={item.sprite} alt='Pokemon' />
                        <span>{item.name.replace('-', '').toUpperCase()}</span>
                    </Link>
                    {
                        index < evolutionChain.length - 1
                            ? <FontAwesomeIcon icon={'arrow-right'} />
                            : null
                    }
                </Fragment>
            )
        })
    };

    return(
        <div className='evolution-container'>
            <h3 className='mr-5'>Evolving</h3>
            {renderChain()}
        </div>
    )
};