export const initialState = {
  weight: 0,
  height: 0,
  bmi: "",
  message: "",
  image: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_WEIGHT":
      return { ...state, weight: action.payload };
    case "SET_HEIGHT":
      return { ...state, height: action.payload };
    case "CALCULATE_BMI":
        const bmi = (state.weight / (state.height * state.height))*1000;
        
        
       if(state.weight ===0 || state.height === 0) {
        alert("Please enter valid weight and height.");
       }else {
        if (bmi <= 1.8) {
            state.message = "you are weak";
            state.image = "https://i.ytimg.com/vi/okoB9frBGIw/hqdefault.jpg";
          } else if (bmi <= 2.5 && bmi >= 1.8) {
            state.message = "you are normal";
            state.image =
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFmcxy0yWdS803FztSiTchXhRhp6WRdozXQ&usqp=CAU";
          } else if (bmi <= 3.0 && bmi >= 2.5) {
            state.message = "you are fat";
            state.image =
              "https://galeri13.uludagsozluk.com/713/kurtlar-vadisi-abidin_2162358.jpg";
          } else if (bmi >= 3.0 && bmi <= 3.5) {
            state.message = "you are obese";
            state.image = "https://i.ytimg.com/vi/IPbyySh9ROM/hqdefault.jpg";
          } else if (bmi >= 3.5) {
            state.message = "morbid obesity";
            state.image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQAE0gUNytXuIt0fE0jD1A6ZMX7alv7_s9CA&usqp=CAU";
          }
       }
       
    return { ...state, bmi: bmi,...state.message,...state.image };
      
    case "RELOAD":
      return initialState;
    default:
      return state;
  }
};
export default reducer;
