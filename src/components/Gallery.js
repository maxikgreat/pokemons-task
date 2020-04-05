

import React from 'react'

export const Gallery = ({visible = true, setVisible}) => {

    if(visible){
        return(
            <div className='gallery-container' onTouchMove={e => {e.preventDefault()}}>
                <h1>Gallery</h1>
            </div>
        )
    }

    return null

};