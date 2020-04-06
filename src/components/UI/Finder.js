import React from 'react'

export const Finder = ({finder, setFinder}) => {

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
              value={finder}
              onChange = {e => setFinder(e.target.value)}
          />
      </div>
  )
};