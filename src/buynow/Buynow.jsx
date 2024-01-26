import { useEffect, useState } from "react";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Rightside";
import Empty from "./Empty";
import axios from "axios";
import { Divider } from "@mui/material";

function Buynow() {
  const [cartData, setCartdata] = useState([]);
  console.log(cartData);
  const token = window.localStorage.getItem("app-token");

  const getbuydata = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/cartdetails`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = response.data;
      console.log("data", data.carts);
      if (response.status === 404 || !data) {
        console.log("Error fetching data", response.data);
      } else {
        setCartdata(data.carts);
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
            <div className="flex-2 bg-white p-4 rounded-md mr-7">
              <h1 className="font-semibold text-3xl">Shopping Cart</h1>
              <p>Select all items</p>
              <hr className="my-4 border-t border-gray-500" />
              {cartData
                .filter((item) => item !== null)
                .map((item, index) => (
                  <div
                    className="item_containert flex flex-col lg:flex-row items-center"
                    key={index}
                  >
                    <img
                      src={item.imagSrc}
                      alt="imgitem"
                      className="w-32 h-32 lg:w-48 lg:h-48"
                    />
                    <div className="ml-4 lg:ml-8 w-auto">
                      <h3 className="font-semibold text-lg lg:text-xl">
                        {item.name}
                      </h3>
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

                      <h3 className="item_price font-semibold text-lg lg:text-xl self-end">
                        ₹{item.price}.00
                      </h3>

                      <Divider />
                    </div>
                  </div>
                ))}

              {/* <hr className="my-4 border-t border-gray-300" /> */}

              <Subtotal item={cartData} />
            </div>
            <div className="flex-2">
              <Right item={cartData} />
            </div>
          </div>
        </div>
      ) : (
        <Empty />
      )}
    </>
  );
}

export default Buynow;
