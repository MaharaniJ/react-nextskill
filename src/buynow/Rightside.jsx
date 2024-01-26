import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


function Right({ item }) {
  const [subtotal, setSubtotal] = useState(0);
  const [val, setVal] = useState(false);
  console.log(item)

  useEffect(() => {
    calculateSubtotal();
  }, [item]);

  const calculateSubtotal = () => {
    let totalPrice = 0;
    item.forEach((singleItem) => {
      totalPrice += singleItem.price; // Accessing price property for each item
    });
    setSubtotal(totalPrice);
  };

  Right.propTypes = {
    item: PropTypes.array.isRequired,
  };

  return (
    <div className="flex-1">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
        alt="rightimg"
        className="w-full"
      />
      <div className="bg-white p-4 rounded-md mt-10">
        <p className="text-gray-500">
          Your order is eligible for FREE Delivery
        </p>
        <br />
        <span className="text-gray-500">
          Select this option at checkout. Details
        </span>
        <h3 className="font-semibold mt-4">
          Subtotal ({item.length} items):{" "}
          <span className="font-semibold">₹{subtotal}.00</span>
        </h3>
        <Link to="/checkout">
        <button className="w-full bg-yellow-500 text-white py-2 rounded-md mt-4">
          Process to Buy
        </button>
        </Link>
        <div
          className="cursor-pointer mt-4 text-blue-500 flex items-center"
          onClick={() => setVal(!val)}
        >
          Emi available
          {val ? (
            <i className="bi bi-caret-up-fill"></i>
          ) : (
            <i className="bi bi-caret-down-fill"></i>
          )}
        </div>
        <span className={val ? "block mt-2 w-1/2" : "hidden"}>
          Your order qualifies for EMI with valid credit cards (not available on
          purchase of Gold, Jewelry, Gift cards and Amazon pay balance top up).
          Learn more
        </span>
      </div>
    </div>
  );
}

export default Right;
