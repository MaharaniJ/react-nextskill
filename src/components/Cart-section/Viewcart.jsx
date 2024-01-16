import { useState } from "react";
import { useParams } from "react-router";
import cart from "../data"; // Import your cart data
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Viewcart() {
  const [getaData, setGetaData] = useState("");
  const { id } = useParams();

  useEffect(() => {
    // Find the item in the cart data with the matching id
    const selectedItem = cart.find((item) => item.cart_id === Number(id));

    // If the item is found, update the state
    if (selectedItem) {
      setGetaData(selectedItem);
    }
  }, [id]);

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
    <div className="cart_section">
      {getaData && Object.keys(getaData).length && (
        <div className="cart_container w-95 mx-auto flex p-10">
          <div className="left_cart flex-1 flex flex-col items-center justify-center">
            <img className="w-1/2 mb-8" src={getaData.imagSrc} alt="" />
          </div>
          <div className="right_cart flex-1 border border-gray-300 p-4 rounded mb-5">
            <h3 className="font-semibold text-xl mb-4">{getaData.name}</h3>

            <hr className="mb-4" />
            <p className="text-[20px]">
              M.R.P. : <del>₹{getaData.price}</del>
            </p>

            <p className="description text-gray-700 mt-4 text-xl">
              <span className="font-semibold">
                About the Item : <span>{getaData.description}</span>
              </span>
            </p>
            <div className="cart_btn flex justify-start mt-8">
              <div className="flex gap-5">
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
                <Link to={`/addtocart/${getaData.cart_id}`}>
                  <button className="cart_btn2 px-5 py-2 bg-orange-500 rounded-full text-gray-800 font-bold focus:outline-none shadow-md">
                    ADD TO CART
                  </button>
                </Link>
              </div>
            </div>
            <div className="my-4 gap-7 text-[20px]">
              <p className="description gap-5">
                <span>
                  Availability:
                  <span>{getaData.availablity}</span>
                </span>
              </p>
              <p className="description">
                <span>
                  SUK:
                  <span>{getaData.sku}</span>
                </span>
              </p>
              <p className="description">
                <span>
                  Categories:
                  <span>{getaData.categories}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {!getaData && (
        <div className="circle flex items-center justify-center h-full">
          {/* <CircularProgress /> */}
          <h2 className="ml-2">Loading....</h2>
        </div>
      )}
    </div>
  );
}

export default Viewcart;
