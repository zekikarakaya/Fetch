import './App.css';
import {useReducer,} from 'react'
import { PiPlusBold } from "react-icons/pi";
import TodoList from './components/TodoList';
import reducer,{initialState} from './reducer';

function App() {
 
   const [state, dispatch] = useReducer(reducer,initialState);
const clickFunc =(e)=>{
  e.preventDefault();
  const newTodo={
    id:Math.floor(Math.random()*100),
    text:state.todo,
  }
  dispatch({type: "ADD_TODO",payload:newTodo})
}
const changeFunc=(e)=>{
  dispatch({type: "SET_TODO",payload:e.target.value})
}

  return (
    <div className="App">
    <h1>TODO LİST</h1>
   <div>
      <input type='text'placeholder='todo giriniz' onChange={changeFunc} value={state.todo}></input>
     <button onClick={clickFunc} disabled={!state.todo} className='btn'><PiPlusBold></PiPlusBold></button>
     </div>
      <TodoList todos={state.todos} dispatch={dispatch}></TodoList>  
    </div>
  );
  }
export default App;


