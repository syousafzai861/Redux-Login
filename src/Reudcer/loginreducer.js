import axios from "axios";

export const handleApi = (data) => {
  return async (dispatch) => {
    const result = {};
    try {
      result = await axios.post('https://reqres.in/api/login', data);
      if (result) {
        dispatch({ type: "LOGIN_SUCESS", payload: result });
      } else {
        dispatch({ type: "LOGIN_FAIL" });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAIL" });
    }
    return result;
  };
};

const loginreducer = (state = { result: {}, loginLoading: false }, action) => {
  if (action.type === "LOGIN_LOADING") {
    return { ...state, loginLoading: true };
  }
  if (action.type === "LOGIN_SUCESS") {
    return { ...state, loginLoading: false, result: action.payload };
  }
  if (action.type === "LOGIN_FAIL") {
    return { ...state, loginLoading: false, result: {} };
  }
  return state;
};

export default loginreducer;
