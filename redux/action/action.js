// // actions.js
// import axios from "axios";

// export const getProducts = () => async (dispatch) => {
//   try {
//     const response = await axios.get("http://localhost:5000/getproducts", {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     // Access the response data using response.data
//     console.log(response.data);

//     dispatch({ type: "GET_PRODUCTS", payload: response.data });
//   } catch (error) {
//     console.error("Error fetching products: ", error.message);
//   }
// };

// action.js
import axios from "axios";
export const getProducts = () => async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:5000/getproducts", {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      dispatch({ type: "SUCCESS_GET_CARDDATAS", payload: response.data });
    } catch (error) {
      console.error("Error fetching products: ", error.message);
      dispatch({ type: "FAIL_GET_CARDDATAS", payload: [] }); // Set an empty array or handle the error appropriately
    }
  };
  
