import { Link, useParams } from "react-router-dom"
import cart from "../data";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Totalamount(){
    const [getaData, setGetaData] = useState([]);

    const getaproductdata = async (id) => {
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
          setGetaData(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
  
    const { id } = useParams();
    useEffect(() => {

      getaproductdata(id)
        // // Find the item in the cart data with the matching id
        // const selectedItem = cart.find((item) => item.cart_id === Number(id));
    
        // // If the item is found, update the state
        // if (selectedItem) {
        //   setGetaData(selectedItem);
        // }
      }, [id]);
    return(
        <>
         <div>
          <div className="flex justify-between">
            <p>
              Cart Subtotal: <span className="text-black-300">$84.00</span>{" "}
            </p>
          </div>
          <div className="flex gap-5">
            <Link to={`/viewcart/${getaData.id}`}>
              <button className="rounded-full border-black-200 bg-slate-300 p-4 ">
                View Cart
              </button>
            </Link>
            <Link to={`/checkout/${getaData.id}`}>
              <button className="rounded-full border-black-200 bg-blue-300 p-4">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
        </>
    )
}
export default Totalamount