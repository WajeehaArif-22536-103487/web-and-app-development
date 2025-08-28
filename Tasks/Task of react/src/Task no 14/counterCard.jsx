import React from 'react'
import './card.css'
import myPhoto from './myphoto.jpg'; 
function CounterCard ({ title, count, button }){
  return (
    <div className="counter-card">
        <img src={myPhoto} alt="pic" width="90%" /> 
      <p>{title}</p>
      <h3>{count}</h3>
      {button}
    </div>
  )
}

export default CounterCard
