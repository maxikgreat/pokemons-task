

import React, {useEffect} from 'react';
import ReactPaginate from 'react-paginate'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const PaginationCustom = ({fullList, itemsPerPage, setCurrentPage}) => {

    useEffect(() => {
        setCurrentPage(1);
    }, [fullList]);

    const back = <FontAwesomeIcon icon={'backward'}/>;
    const forward = <FontAwesomeIcon icon={'forward'} />;

    let pageNumber = 0;

    for(let i = 1; i <= Math.ceil(fullList.length / itemsPerPage); i++){
        pageNumber += 1;
    }

    const handlePageClick = (page) => {
        console.log(page.selected);
        setCurrentPage(page.selected + 1);
    };

    return(
        <div className='pagination-container'>
            <ReactPaginate
                previousLabel={back}
                nextLabel={forward}
                breakLabel={'...'}
                containerClassName={'pagination'}
                activeClassName={'active'}
                pageCount={pageNumber}
                onPageChange={page => handlePageClick(page)}
            />
        </div>
    )
}
