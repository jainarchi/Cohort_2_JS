import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement} from './features/counterSlice'

const App = () => {

    const dispatch = useDispatch()
    const val = useSelector((state) => state.counter.value)

  return (
    <div>
      
      <h1>{val}</h1>

      <button onClick={() => dispatch(increment()) }  >Increament</button>  
      <button onClick={() => dispatch(decrement()) }>Decrement</button>
    </div>
  )
}

export default App


// dispatch function  call an action 
// useSelect to read a state


// flow 
// compount -> dispatch action  ->  reducer update state  ->  store update ->  component rerender 