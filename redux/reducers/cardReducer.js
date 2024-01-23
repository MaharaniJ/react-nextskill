const initialState = {
  carddatas: [],
};

export const getCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS_GET_CARDDATAS":
      return { carddatas: action.payload };
    case "FAIL_GET_CARDDATAS":
      return { carddatas: action.payload };
    default:
      return state;
  }
};


