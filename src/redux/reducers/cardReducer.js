// const initialState = {
//   carddatas: [],
// };
const carddatas = [];

export const getCardReducer = (state = { carddatas }, action) => {
  switch (action.type) {
    case "SUCCESS_GET_CARDDATAS":
      return { carddatas: action.payload };
    case "FAIL_GET_CARDDATAS":
      return { carddatas: action.payload };
    default:
      return state;
  }
};
