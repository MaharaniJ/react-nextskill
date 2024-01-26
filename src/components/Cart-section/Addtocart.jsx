import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import Totalamount from "./Totalamount";
import { LoginContext } from "../../context/ContextProvider";
import { CircularProgress, Divider } from "@mui/material";
import { toast } from "react-toastify";

function Addtocart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { account, setAccount } = useContext(LoginContext);
  console.log("account:", account);

  const [count, setCount] = useState(1);

  const [getdata, setGetdata] = useState("");
  console.log("getdata:", getdata);

  const getaproductdata = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/getproduct/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.data;
      console.log(data);
      if (res.status !== 201) {
        alert("no data available");
      } else {
        setGetdata(data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    setTimeout(getaproductdata, 1000);
  }, [id]);

  const addtocart = async (id) => {
    const token = window.localStorage.getItem("app-token");
    // console.log(id);
    try {
      const response = await axios.post(
        `http://localhost:5000/addtocart/${id}`,
        getdata,

        {
          headers: {
            Authorization: `Bearer ${token}`,
            // "Content-Type": "application/json", // Add this line
          },
        }
      );
      const data1 = await response.data;
      console.log(data1);
      if (response.status === 200) {
        setAccount(data1);
        navigate("/buynow");
        alert("data added in your cart");
      } else {
        
        toast.error("Invalid USer",{posstion:"top-center"})
        console.log("invalid User");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle the error here
    }
  };

  // const addtoCart = () => {
  //   setCart([...cart, { ...getdata, quantity: count }]);
  //   alert("Item added to cart");
  // };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="cart_section relative top-60 h-screen">
      {getdata && Object.keys(getdata).length && (
        <div className="cart_container w-95 mx-auto flex p-10">
          <div className="left_cart flex-1 flex flex-col items-center justify-center">
            <img src={getdata.imagSrc} alt="" className="w-1/2 mb-8" />
            <div className="cart_btn flex justify-start">
              <button
                className="cart_btn1 bg-yellow-500 border-none outline-none rounded-full py-2 px-8 text-black mr-4 cursor-pointer"
                onClick={() => addtocart(getdata.id)}
              >
                Add to Cart
              </button>
             <Link to={`/checkout/${getdata.id}`}>
             <button className="cart_btn2 bg-orange-500 border-none outline-none rounded-full py-2 px-8 text-black cursor-pointer">
                buynow
              </button>
             </Link>
            </div>
          </div>
          <div className="right_cart flex-1 border border-gray-300 p-4 rounded">
            <h3 className="font-semibold text-xl mb-4">{getdata.name}</h3>

            <Divider />
            <p className="mrp">
              M.R.P. : <del>₹{getdata.price}</del>
            </p>
            <p>
              Deal of the Day:
              <span className="text-red-600">{getdata.price}</span>
            </p>

            <div className="discount_box">
              <h4 className="text-blue-500 font-semibold">
                Free Delivery : Oct 8 - 12 Details
              </h4>
              <p className="text-blue-500 font-semibold">
                Fastest delivery: Tomorrow 11AM
              </p>
            </div>
            <p className="description text-black">
              <span className="font-semibold">
                About the Item : {getdata.description}
              </span>
            </p>
          </div>
        </div>
      )}
      {!getdata && (
        <div className="circle flex items-center justify-center">
          <CircularProgress />
          <h2 className="ml-2">Loading....</h2>
        </div>
      )}
    </div>

    
  );
}

export default Addtocart;
