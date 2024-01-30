import { useEffect, useState } from "react";
import Option from "./Option";
import Subtotal from "./Subtotal";
import Right from "./Rightside";
import Empty from "./Empty";
import axios from "axios";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

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
        <div className="w-full min-h-[50vh] relative top-16 bg-[#eaeded] sm:min-h-45vh">
          <div className="mx-auto flex p-8 flex-col-2 flex-wrap gap-7 sm:flex-row-2 md:flex-row-2 ">
            <div className="flex-1 bg-white p-4 rounded-md mr-7 md:mr-0 md:w-3/4">
              <h1 className="font-semibold text-3xl">Shopping Cart</h1>
              <p className="mx-auto my-5 text-blue-500">Select all items</p>
              <hr className="my-4 border-t border-gray-500" />
              {cartData
                .filter((item) => item !== null)
                .map((item, index) => (
                  <div
                    className="grid grid-cols-2 gap-y-10 p-10 md:p-5 md:pt-20 md:pr-15 w-auto"
                    key={index}
                  >
                   <Link to={`/viewcart/${item.id}`}>
                   <img
                      src={item.imagSrc}
                      alt="imgitem"
                      className="w-60 h-32 lg:w-48 lg:h-48 sm:mr-5"
                    /></Link>
                    <div className="w-auto ml-0">
                      <h3 className="font-medium text-28">{item.name}</h3>
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
                      <Option deleteData={parseInt(item.id)} getData={getbuydata} />

                      <h3 className="item_price font-semibold text-lg lg:text-xl">
                        ₹{item.price}.00
                      </h3>

                      <Divider />
                    </div>
                  </div>
                ))}

              {/* <hr className="my-4 border-t border-gray-300" /> */}

              <Subtotal item={cartData} />
            </div>
            <div >
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
