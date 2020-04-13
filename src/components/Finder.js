import React from 'react'

export const Finder = ({title, finder, setFinder, setPage}) => {

    const changeHandle = (e) => {
        setPage(1);
        setFinder(e.target.value)
    };

  return(
      <div className="input-group mb-3">
          <div className="input-group-prepend">
              <span className="input-group-text" id="finder">{title}</span>
          </div>
          <input
              type="text"
              className="form-control"
              aria-label="Default"
              aria-describedby="finder"
              placeholder="Start typing..."
              value={finder}
              onChange = {e => changeHandle(e)}
          />
      </div>
  )
};