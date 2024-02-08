export const initialState = {
  togoCountry:[],
  goneCountry: [],
  };

  const reducer =(state,action)=>{
      switch (action.type) {
        case "ADD_COUNTRY":
            return {...state,togoCountry:[...state.togoCountry,action.payload]};
        case "COMPLETE_COUNTRY":
            return {...state,goneCountry:[...state.goneCountry,action.payload]};
            case "DELETE_COUNTRY":
                return {...state,goneCountry:[...state.goneCountry.filter(country=> country!==action.payload)]};
        default:
           return state;
      }
  }

  export default reducer;

