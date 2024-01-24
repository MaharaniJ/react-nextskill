import { useEffect, useState } from "react";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Rightside";
import Empty from "./Empty";
import axios from "axios";

function Buynow() {
  const [cartData, setCartdata] = useState([]);
  console.log(cartData);
  const token = window.localStorage.getItem("app-token");
  console.log(token);

  const getbuydata = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cartdetails`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data || !Array.isArray(response.data)) {
        console.log("Error fetching data", response.data);
        setCartdata([]); // Set an empty array if the response is not an array
      } else {
        setCartdata(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getbuydata();
  }, []);

  return (
    <>
      {cartData.length > 0 ? (
        <div className="w-full min-h-screen relative top-16 bg-gray-300">
          <div className="mx-auto flex buynow_container p-8">
            <div className="flex-3 bg-white p-4 rounded-md">
              <h1 className="font-semibold text-3xl">Shopping Cart</h1>
              <p>Select all items</p>
              <hr className="my-4 border-t border-gray-300" />
              {cartData.map((item, index) => (
                <div className="item_containert" key={index}>
                  <img src={item.imagSrc} alt="imgitem" className="w-32 h-32" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="font-semibold">{item.description}</p>
                    <p className="diffrentprice">₹{item.price}.00</p>
                    <p className="unusuall text-orange-500">
                      Usually dispatched in 8 days.
                    </p>
                    <p>Eligible for FREE Shipping</p>
                    <img
                      src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png"
                      alt="logo"
                      className="w-16 h-4 cursor-pointer"
                    />
                    <Option deleteData={item.id} getData={getbuydata} />
                  </div>
                  <h3 className="item_price font-semibold">₹{item.price}.00</h3>
                </div>
              ))}

              <hr className="my-4 border-t border-gray-300" />
              <Subtotal item={cartData} />
            </div>
            <Right item={cartData} />
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default Buynow;
