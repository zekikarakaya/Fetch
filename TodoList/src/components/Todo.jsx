import React from 'react';
import { BsCheckCircleFill, BsDashCircleFill } from 'react-icons/bs';
import reducer from '../reducer';
import clsx from "clsx";

const Todo = ({ todo, dispatch }) => {
  const deleteFunc = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };
 const completeFunc=(id)=>{
    dispatch({ type: 'COMPLETE_TODO', payload: id });
 }
 const todoStyle = clsx ({
 ["completed"]:todo.isCompleted,
 })
  return (
    <div>
      <ul>
        <li key={todo.id} className={todoStyle}>
          <button className='btn' onClick={()=>completeFunc(todo.id)}>
            <BsCheckCircleFill size='20px' />
          </button>
          {todo.text}
          <button className='btn' onClick={() => deleteFunc(todo.id)}>
            <BsDashCircleFill size='20px' />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Todo;


// import React from 'react'
// import { BsCheckCircleFill,BsDashCircleFill } from "react-icons/bs";
// import { useReducer } from 'react'

// const Todo = ({todo}) => {
//     const initialState = {
//         todos:[],
//         todo:"",
//       }
//       const reducerFunc=(state,action)=>{
//          switch (action.type) {
//           case "ADD_TODO":
//             return {...state,todos:[...state.todos,action.payload],todo:""}
//             case"SET_TODO":
//             return {...state,todo:action.payload}
//             case"DELETE_TODO":
//             return {...state,todos:state.todos.filter((item)=>item.id!==action.payload),}
//           default:
//             return state;
//          }
//       }
//       const deleteFunc=(id)=>{
//         dispatch({type:"DELETE_TODO",payload:id})
//       }
//     const [state, dispatch] = useReducer(reducerFunc,initialState);
//     const completeFunc=()=>{
        
//     }
    
//   return (
//     <div>
            
//             <ul>
//             <li key={todo.id}>
       
//       <button className='btn' onClick={completeFunc}>
//         <BsCheckCircleFill size='20px' />
//       </button>
//       {todo.text}
//       <button className='btn' onClick={() => deleteFunc(todo.id)}>
//         <BsDashCircleFill size='20px' />
//       </button>
//     </li>
//             </ul>

//     </div>
//   )
// }

// export default Todo


