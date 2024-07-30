const initialState = 0;
const minLimit = -1000000000;
const maxLimit = 2000000000;

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return Math.min(state + action.payload, maxLimit);
    case "DECREMENT":
      return Math.max(state - action.payload, minLimit);
    case "RESET":
      return initialState;
    case "SET_NUMBER":
      return Math.max(Math.min(action.payload, maxLimit), minLimit);
    default:
      return state;
  }
};

export default changeTheNumber;
