import { Link, useParams } from "react-router-dom";
import Viewcart from "./Viewcart";
import { useEffect } from "react";
import cart from "../data";
import { useState } from "react";
import Totalamount from "./Totalamount";

function Mycart() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const [getaData, setGetaData] = useState([]);
  
  const { id } = useParams();

  // useEffect((newitem)=>{
  //   setGetaData((prevItem)=>[...prevItem,newitem])
  // },[id])

  // const addToCart = () => {
  //   // Create a copy of the existing cart items array
  //   const updatedCart = [...cartItems];

  //   // Check if the item is already in the cart
  //   const existingItem = updatedCart.find(
  //     (item) => item.cart_id === getaData.cart_id
  //   );

  //   // If the item is in the cart, update its quantity
  //   // Otherwise, add the item to the cart
  //   if (existingItem) {
  //     existingItem.quantity += count;
  //   } else {
  //     updatedCart.push({
  //       ...getaData,
  //       quantity: count,
  //     });
  //   }

  //   setCartItems(updatedCart);
  // };

  // const calculateTotal = () => {
  //   return cartItems.reduce(
  //     (total, item) => total + item.price * item.quantity,
  //     0
  //   );
  // };

  useEffect(() => {
    // Find the item in the cart data with the matching id
    const selectedItem = cart.find((item) => item.cart_id === Number(id));

    // If the item is found, update the state
    if (selectedItem) {
      setGetaData(selectedItem);
    }
  }, [id]);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-400">
      <div>
        <h1 className="flex justify-center">MY CART</h1>
        <div className="border-spacing-x-6 border-y-4 flex justify-center py-10">
          <p>
            Almost there, add
            <span className="text-red-500 m-2 text-md ">$16.00</span>more to get{" "}
            <span className="text-red-500 m-2">FREE SHIPPING!</span>
          </p>
        </div>
        <div className="flex flex-row justify-center gap-10 h-96 mt-5 border-b-4 mb-5 pb-6">
          <img className="w-25 h-auto" src={getaData.imagSrc} />
          <div className=" mb-7">
            <p>{getaData.name}</p>
            <p>{getaData.price}</p>
            <div className=" ">
              <button className="flex justify-evenly px-4 py-2 bg-blue-500 text-white font-bold rounded-full w-40 hover:bg-blue-700">
                <span
                  className="flex items-center text-lg"
                  onClick={handleDecrement}
                >
                  -
                </span>
                {count}
                <span
                  className="flex items-center text-lg"
                  onClick={handleIncrement}
                >
                  +
                </span>
              </button>
            </div>
          </div>
        </div>
       <Totalamount />
      </div>
    </div>
  );
}

export default Mycart;
