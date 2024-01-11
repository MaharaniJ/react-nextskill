import { useState } from "react";
import { Link } from "react-router-dom";
import Viewcart from "./Viewcart";

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

  return (
    <div className="w-60">
      <h1 className="flex justify-center mb-6">MY CART</h1>
      <div className="border-spacing-x-6 border-y-4 flex justify-center py-10">
        <p>
          Almost there, add
          <span className="text-red-500 m-2 text-md ">$16.00</span>more to get{" "}
          <span className="text-red-500 m-2">FREE SHIPPING!</span>
        </p>
      </div>
      <div className="flex flex-row justify-center gap-10 h-96 mt-5 border-b-4 mb-5 pb-6">
        <img
          className="w-25 h-auto "
          src="https://img.freepik.com/premium-psd/digital-device-screen-mockup-vector-with-laptop-smartphone-with-gradient-wallpapers_53876-129214.jpg?size=626&ext=jpg"
        />
        <div className=" mb-7">
          <p>Cap Cottage Playhouse</p>
          <p>$84.00</p>
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
      <div>
        <div className="flex justify-between">
          <p>
            Cart Subtotal: <span className="text-black-300">$84.00</span>{" "}
          </p>
        </div>
        <div className="flex gap-5">
          <button className="rounded-full border-black-200 bg-slate-300 p-4 ">
            View Cart
          </button>

          <button className="rounded-full border-black-200 bg-blue-300 p-4">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Mycart;
