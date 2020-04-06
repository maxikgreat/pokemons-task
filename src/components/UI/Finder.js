import React, {useEffect, useState} from 'react'
import {filter, getNames} from "../../helpFunctions/filter";


export const Finder = ({poks, parentContainer}) => {

    const [pokName, setPokName] = useState('');

    useEffect(() => {
        filter(getNames(poks), pokName, parentContainer);
    },[pokName]);


  return(
      <div className="input-group mb-3">
          <div className="input-group-prepend">
              <span className="input-group-text" id="finder">Find pokemon</span>
          </div>
          <input
              type="text"
              className="form-control"
              aria-label="Default"
              aria-describedby="finder"
              placeholder="Start typing..."
              value={pokName}
              onChange = {e => setPokName(e.target.value)}
          />
      </div>
  )
};