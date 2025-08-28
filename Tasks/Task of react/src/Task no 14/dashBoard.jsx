import React, { useState } from 'react'
import CounterCard from './counterCard'
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa'
import './card.css'

function Dashboard () {
  const [count, setCount] = useState(0)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)

  return (
    <div className="dashboard">
      <CounterCard
        title="Rate This"
        count={count}
        button={
          <>
            <button onClick={increment}><FaThumbsUp /></button>
            <button onClick={decrement}> <FaThumbsDown /></button>
          </>
        }
      />
    </div>
  )
}

export default Dashboard
