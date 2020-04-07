
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import React from 'react'

export const OrderOptions = ({setOrder}) => {
  return(
      <div className="order-container mb-3">
          <span>Order by</span>
          <ToggleButtonGroup type="radio" name="options" defaultValue={'default'}>
              <ToggleButton value={'default'} onClick = {() => {setOrder('default')}}>Default</ToggleButton>
              <ToggleButton value={'name'} onClick = {() => {setOrder('name')}}>Name</ToggleButton>
              <ToggleButton value={'experience'} onClick = {() => {setOrder('experience')}}>Experience</ToggleButton>
          </ToggleButtonGroup>
      </div>
  )
};