import { useContext } from "react";
import axios from "axios";
import { LoginContext } from "../context/ContextProvider";
import PropTypes from "prop-types";

function Option({ deleteData, getData }) {
  const { account, setAccount } = useContext(LoginContext);
  console.log(getData);
 

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
    <div className="add_remove_select flex justify-evenly" key={deleteData}>
      <select className="p-2">
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
      <span className="mx-2">|</span>
      <p className="forremovemedia">Save Or Later</p>
      <span className="mx-2">|</span>
      <p className="forremovemedia"> See More like this</p>
    </div>
  );
}

export default Option;
