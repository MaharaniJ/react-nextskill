import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";
import { useContext } from "react";
import { LoginContext } from "../../context/ContextProvider";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

// import india from "../../assets/india.png";

function Rightheader({ drawClose, logoutuser }) {
  const { account, setAccount } = useContext(LoginContext);
  console.log(account);

  Rightheader.propTypes = {
    drawClose: PropTypes.func,
    logoutuser: PropTypes.func.isRequired,
  };
  return (
    <div className="rightheader w-72 h-auto">
      <div className="right_nav flex items-center bg-blue-900 pb-2">
        {account && account.fname ? (
          <Avatar className="cursor-pointer">
            {account.fname[0].toUpperCase()}
          </Avatar>
        ) : (
          <Avatar className="bi bi-person-circle  cursor-pointer"></Avatar>
        )}

        {account && account.fname ? (
          <h3 className="ml-2 mt-2 text-white font-italic font-semibold">
            Helloo, {account.fname.toUpperCase()}
          </h3>
        ) : (
          <h3 className="ml-2 mt-2 text-white font-italic font-semibold">
            Guest
          </h3>
        )}
      </div>

      <div className="nav_btn ml-10 mt-4" onClick={() => drawClose()}>
        <NavLink to="/" className="text-black text-lg font-semibold mb-4">
          Home
        </NavLink>
        <NavLink to="/" className="text-black text-lg font-semibold mb-4">
          Shop by Category
        </NavLink>

        <hr className="my-4 border-t border-gray-300" />

        <NavLink to="/" className="text-black text-lg font-semibold mb-4">
          Today's Deal
        </NavLink>

        {account ? (
          <NavLink
            to="/buynow"
            className="text-black text-lg font-semibold mb-4"
          >
            Your Orders
          </NavLink>
        ) : (
          <NavLink
            to="/login"
            className="text-black text-lg font-semibold mb-4"
          >
            Your Orders
          </NavLink>
        )}

        <Divider className="my-4 border-t border-gray-300 w-full ml-[-20px]" />

        <div className="flag flex items-center">
          <NavLink to="/" className="text-black text-lg font-semibold mb-4">
            Settings
          </NavLink>
          {/* <img src={india} alt="" className="w-9 h-9 ml-2" /> */}
        </div>

        {account ? (
          <div className="flag flex items-center">
            <i className="bi bi-box-arrow-right text-lg mr-1"></i>

            <h3
              onClick={() => logoutuser()}
              className="cursor-pointer font-semibold"
            >
              Logout
            </h3>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="text-black text-lg font-semibold mb-4"
          >
            SINGIN
          </NavLink>
        )}
      </div>
    </div>
  );
}

export default Rightheader;
