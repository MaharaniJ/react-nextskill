import { useState } from "react";
import { useParams } from "react-router";
import cart from "../data"; // Import your cart data
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Viewcart() {
  // const [getaData, setGetaData] = useState("");
  // console.log(getaData);

  const { id } = useParams("");
  // const { account, setAccount } = useContext(LoginContext);

  const [getdata, setGetdata] = useState([]);
  console.log("getdata:", getdata.imagSrc);


  // Inside getaproductdata function
  const getaproductdata = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/getproduct/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) {
        // Checking for successful response status
        const data = res.data;
        console.log(data);
        setGetdata(data);
      } else {
        console.log("No data available");
      }
    } catch (error) {
      console.log(error);
      // Handle error, for example:
      alert("Error fetching product data");
    }
  };

  useEffect(() => {
    // setTimeout(getaproductdata, 1000);
    getaproductdata();
  }, [id]);

  // useEffect(() => {
  //   // Find the item in the cart data with the matching id
  //   const selectedItem = cart.find((item) => item.cart_id === Number(id));

  //   // If the item is found, update the state
  //   if (selectedItem) {
  //     setGetaData(selectedItem);
  //   }
  // }, [id]);

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
    <div className="cart_section mt-20">
      {getdata && Object.keys(getdata).length && (
        <div className="cart_container w-95 mx-auto flex p-10">
          <div className="left_cart flex-1 flex flex-col items-center justify-center">
            <img className="w-1/2 mb-8" src={getdata.imagSrc} alt="" />
          </div>
          <div className="right_cart flex-1 border border-gray-300 p-4 rounded mb-5">
            <h3 className="font-semibold text-xl mb-4">{getdata.name}</h3>

            <hr className="mb-4" />
            <p className="text-[20px]">
              M.R.P. : <del>₹{getdata.price}</del>
            </p>

            <p className="description text-gray-700 mt-4 text-xl">
              <span className="font-semibold">
                About the Item : <span>{getdata.description}</span>
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
                <Link to={`/addtocart/${getdata.id}`}>
                  <button className="cart_btn2 px-5 py-2 bg-orange-500 rounded-full text-gray-800 font-bold focus:outline-none shadow-md">
                    ADD TO CART
                  </button>
                </Link>
                <Link to="/checkout">
                  <button className="cart_btn2 px-5 py-2 bg-orange-500 rounded-full text-gray-800 font-bold focus:outline-none shadow-md">
                    Buynow
                  </button>
                </Link>
              </div>
            </div>
            <div className="my-4 gap-7 text-[20px]">
              <p className="description gap-5">
                <span>
                  Availability:
                  <span>{getdata.availablity}</span>
                </span>
              </p>
              <p className="description">
                <span>
                  SUK:
                  <span>{getdata.sku}</span>
                </span>
              </p>
              <p className="description">
                <span>
                  Categories:
                  <span>{getdata.categories}</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
      {!getdata && (
        <div className="circle flex items-center justify-center h-full">
          {/* <CircularProgress /> */}
          <h2 className="ml-2">Loading....</h2>
        </div>
      )}
    </div>
  );
}

export default Viewcart;
