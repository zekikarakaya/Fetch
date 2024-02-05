import React from 'react'
import Todo from './Todo'

const TodoList = ({todos,dispatch}) => {
  return (
    <div>
         
         {
          todos.map((todo)=>(
            <Todo key={todo.id} todo={todo} dispatch={dispatch}></Todo>
          ))
        }

    </div>
  )
}

export default TodoList