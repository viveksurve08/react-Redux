const initialHistory = [];

const changeTheHistory = (state = initialHistory, action) => {
  switch (action.type) {
    case "ADD_HISTORY":
      return [...state, action.payload];
    case "RESET_HISTORY":
      return initialHistory;
    default:
      return state;
  }
};

export default changeTheHistory;
