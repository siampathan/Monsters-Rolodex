import React from 'react';
import './card-style.css';

export const Card = (props) => {
    const {id,name,email} = props.monster;
  return (
    <div className='card-container'>
        <img src={`https://robohash.org/${id}?size=100x100`} alt="" />
        <h2> {name} </h2>
        <p> {email} </p>
    </div>
  )
}
