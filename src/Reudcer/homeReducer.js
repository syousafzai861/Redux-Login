const homeReducer = (state = { count: 100 }, action) => {
   if(action.type === "ADD"){
    return state.value + action.payload
   }
  return state;
};

export default homeReducer;
