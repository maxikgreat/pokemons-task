

import React from 'react';
import ReactPaginate from 'react-paginate'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const PaginationCustom = ({fullList, itemsPerPage, currentPage, setGlobalPages, container}) => {

    const back = <FontAwesomeIcon icon={'backward'}/>;
    const forward = <FontAwesomeIcon icon={'forward'} />;

    let pageNumber = 0;

    for(let i = 1; i <= Math.ceil(fullList.length / itemsPerPage); i++){
        pageNumber += 1;
    }

    const updatePages = (page) => {
        if(container){
            container.scrollIntoView({behavior: "smooth"});
        }
        setGlobalPages(page + 1);
    };

    return(
        <div className='pagination-container'>
            <ReactPaginate
                previousLabel={back}
                nextLabel={forward}
                breakLabel={'...'}
                containerClassName={'pagination'}
                activeClassName={'active'}
                forcePage = {currentPage - 1}
                pageCount={pageNumber}
                onPageChange={page => updatePages(page.selected)}
            />
        </div>
    )
};
