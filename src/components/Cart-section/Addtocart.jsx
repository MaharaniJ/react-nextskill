import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Totalamount from "./Totalamount";
import { LoginContext } from "../../context/ContextProvider";
import { Divider } from "@mui/material";

function Addtocart() {
  const { id } = useParams();
  const history = useNavigate();
  const { account, setAccount } = useContext(LoginContext);

  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);
  const [getdata, setGetdata] = useState([]);
 
  cart.forEach((cartItem) => {
    console.log(cartItem.imagSrc);
  });

  const getaproductdata = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/getproduct/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = res.data;
      console.log(data);
      if (res.status !== 201) {
        alert("no data available");
      } else {
        setGetdata(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getaproductdata(id);
  }, [id]);

  const addtoCart = () => {
    setCart([...cart, { ...getdata, quantity: count }]);
    alert("Item added to cart");
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

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
        {cart.map((cartItem) => (
          <div
            key={cartItem.id}
            className="flex flex-row justify-center gap-10 h-96 mt-5 border-b-4 mb-5 pb-6"
          >
            <img
              className="w-25 h-auto"
              src={cartItem.imagSrc}
              alt={cartItem.name}
            />
            <div className=" mb-7">
              <p>{cartItem.name}</p>
              <p>{cartItem.price}</p>
              <div className=" ">
                <button className="flex justify-evenly px-4 py-2 bg-blue-500 text-white font-bold rounded-full w-40 hover:bg-blue-700">
                  <span
                    className="flex items-center text-lg"
                    onClick={handleDecrement}
                  >
                    -
                  </span>
                  {cartItem.quantity}
                  <span
                    className="flex items-center text-lg"
                    onClick={handleIncrement}
                  >
                    +
                  </span>
                </button>
              </div>
            </div>
            <Divider />
          </div>
        ))}
        <Totalamount />
        <button
          onClick={addtoCart}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Addtocart;
