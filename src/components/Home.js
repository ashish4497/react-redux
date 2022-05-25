import React from 'react'
import Header from './Header'
import '../assets/style/home.css'
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../redux/action/increment-action';


export default function Home() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.countReducer.count)

  const handleIncrement = () => {
    dispatch(incrementCounter())
  }

  const handleDecrement = () => {
    dispatch(decrementCounter())
  }

  return (
    <>
      <Header />
      <div>
        <div className="h-p-c">
          <h3>{count}</h3>
        </div>
        <div className="counter-container h-p-c">
          <button className='btn' onClick={handleIncrement}>increment</button>
          <button className='btn' onClick={handleDecrement}>decrement</button>
        </div>
      </div>
    </>
  )
}
