export const initialState = {
 gidilmişler:[],
 gidilecekler:[],
};

const reducer = (state, action) => {
     switch (action.type) {
      case "ADD_ÜLKE":
      return {...state,gidilecekler:[...state.gidilecekler,action.payload]};
        
         
      default:
        return state;
     }
   
  }

export default reducer;
