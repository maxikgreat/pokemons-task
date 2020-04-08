
import React from 'react';
import {ProgressBar} from "react-bootstrap";

export const Stats = ({stats}) => {

    const renderStats = () => {
        return stats.map((stat, index) => {
            return (
                <div className='stat' key={index}>
                    <span>{stat.title.toUpperCase()}</span>
                    <ProgressBar variant={stat.color} animated now={stat.value} max={300} label={stat.value}/>
                </div>
            )
        });
    };

  return(
      <div className='stats-container'>
          {renderStats()}
      </div>
  )
};