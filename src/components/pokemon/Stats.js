
import React from 'react';
import {ProgressBar} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Stats = ({stats}) => {

    const renderStats = () => {
        return stats.map((stat, index) => {
            return (
                <div className='stat' key={index}>
                    <span>{stat.title.toUpperCase()}</span>
                    <FontAwesomeIcon icon={stat.icon} className={ 'text-' + stat.color }/>
                    <ProgressBar variant={stat.color} animated now={stat.value} max={300} label={stat.value}/>
                </div>
            )
        });
    };

  return(
      <div className='stats-container'>
          <h3>Stats</h3>
          {renderStats()}
      </div>
  )
};