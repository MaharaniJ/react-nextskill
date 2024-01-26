import { Link, useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { LoginContext } from "../../context/ContextProvider";

function Totalamount() {
  const [getaData, setGetaData] = useState([]);
  
  const { id } = useParams();

  const getaproductdata = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/getproduct/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status === 201) { // Checking for successful response status
        const data = res.data;
        console.log(data);
        setGetaData(data);
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
    getaproductdata();
  }, [id]);

  return (
    <>
      <div>
        <div className="flex justify-between">
          <p>
            Cart Subtotal:{" "}
            <span className="text-black-300">$84.00</span>{" "}
          </p>
        </div>
        <div className="flex gap-5">
          {getaData && getaData.id && (
            <Link to={`/viewcart/${getaData.id}`}>
              <button className="rounded-full border-black-200 bg-slate-300 p-4">
                View Cart
              </button>
            </Link>
          )}
          <Link to={`/checkout/${getaData?.id}`}>
            <button className="rounded-full border-black-200 bg-blue-300 p-4">
              Proceed to Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Totalamount;
