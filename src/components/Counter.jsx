 import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/CounterSlice'; 


 const Counter = () => {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.value)
   return (
     <div>
       <button onClick={()=>dispatch(increment())}>Increment</button>
       <br/>
       <br/>
       <div>{count}</div>
       <br/> 
       <br/>
       <button onClick={()=>dispatch(decrement())}>Decrement</button>
     </div>
   )
 }
 
 export default Counter
 