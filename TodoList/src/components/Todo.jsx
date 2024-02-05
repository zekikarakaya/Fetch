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