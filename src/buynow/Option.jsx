import { useContext } from "react";
import axios from "axios";
import { LoginContext } from "../context/ContextProvider";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Option({ deleteData, getData }) {
  const { account, setAccount } = useContext(LoginContext);

 

  const token = window.localStorage.getItem("app-token");

  const removedata = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await axios.get(`http://localhost:5000/remove/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.data;

        if (response.status === 200) {
          console.log("Item Deleted");
          setAccount(data);
          getData();
          alert("Item removed from cart 😃!");
          window.location.reload();
        } else {
          console.log("Error in API");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  Option.propTypes = {
    deleteData: PropTypes.number.isRequired,
    getData: PropTypes.func.isRequired,
  };

  return (
    <div className="flex items-center justify-evenly mt-3 mb-4" key={deleteData}>
      <select className="p-1 w-12 rounded-2xl bg-gray-100 leading-tight mt-2 outline-none border border-gray-300 shadow-md">
        {[1, 2, 3, 4].map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => removedata(deleteData)}
        className="text-blue-500"
      >
        Delete
      </p>
      <span className="mx-2  sm:inline">|</span>
      <p className="w-auto sm:inline">Save Or Later</p>
      <span className="mx-2">|</span>
      <Link to="/" className="hover:text-blue-300 w-auto"> See More like this</Link>
    </div>
  );
}

export default Option;
