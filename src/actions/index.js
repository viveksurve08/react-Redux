export const incNumber = (step = 1) => {
  return {
    type: "INCREMENT",
    payload: step,
  };
};

export const decNumber = (step = 1) => {
  return {
    type: "DECREMENT",
    payload: step,
  };
};

export const resetNumber = () => {
  return {
    type: "RESET",
  };
};

export const setNumber = (value) => {
  return {
    type: "SET_NUMBER",
    payload: value,
  };
};

export const addHistory = (value) => {
  return {
    type: "ADD_HISTORY",
    payload: value,
  };
};

export const resetHistory = () => {
  return {
    type: "RESET_HISTORY",
  };
};
