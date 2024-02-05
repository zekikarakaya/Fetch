export const initialState = {
    todos: [],
    todo: "",
    isCompleted: false,
  };

const reducer = (state, action) => {
    switch (action.type) {
      case "SET_TODO":
        return {...state,todo:action.payload};
        case "ADD_TODO":
          return {...state,todos:[...state.todos, action.payload], todo:""};
        case "DELETE_TODO":
          return {...state,
          todos:state.todos.filter((item)=> item.id !== action.payload)};
          case "COMPLETE_TODO":
            return { ...state,todos:state.todos.map(todo=>{
                if(todo.id !==action.payload){
                    return todo
                }
                return { ...todo,isCompleted: !todo.isCompleted}
            }) };
      default:
        return state;
    }
    
  };
  
  export default reducer;