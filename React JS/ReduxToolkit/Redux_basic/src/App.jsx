import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement} from './features/counterSlice'
import { lightMode , darkMode , newMode } from './features/themeSlice'

const App = () => {

    const dispatch = useDispatch()

    const val = useSelector((state) => state.counter.value)
    const themeValue = useSelector((state) => state.theme.value)
    

  return (
    <div>
      <nav>
        <h3>theme is {themeValue}</h3>
        <button onClick={() => dispatch(lightMode())}  >light</button> 
        <button onClick={() => dispatch(darkMode())}  >dark</button>
        <button onClick={() => dispatch(newMode('red'))} >new modify</button>
      </nav>


      
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