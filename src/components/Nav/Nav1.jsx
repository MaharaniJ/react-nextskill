import { useContext, useEffect, useState } from "react";
import { Search } from "@mui/icons-material";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
import axios from "axios";
import { Drawer, IconButton, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Rightheader from "./Rightheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";

function Nav1() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [drawOpen, setDrawopen] = useState(false);
  const [text, setText] = useState("");
  console.log(text);
  const [liOpen, setLiopen] = useState(true);
  const { account, setAccount } = useContext(LoginContext);
  console.log("accountconsole:", account);

  if (account && Object.prototype.hasOwnProperty.call("firstname")) {
    console.log(account.firstname);
  } else {
    console.log(
      "The 'firstname' property does not exist in the account object."
    );
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { carddatas } = useSelector((state) => state.getCardData);
  console.log(carddatas);

  useEffect(() => {
    getvaliduser();
  }, []);

  const send = () => {
    if (account) {
      navigate("/");
    }
  };

  const getvaliduser = async () => {
    const token = window.localStorage.getItem("app-token");
    try {
      const response = await axios.get(`http://localhost:5000/validuser`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        console.log("Server responded with an error status:", response.status);
      } else {
        const data = response.data;
        console.log("responsedata:", data);
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  };

  const logoutuser = async () => {
    try {
      const token = window.localStorage.getItem("app-token");

      // Display a confirmation dialog to the user
      const userConfirmed = window.confirm("Do you want to logout?");

      if (userConfirmed) {
        // User confirmed the logout

        const res = await axios.get(`httpl://localhost:5000/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.data;
        console.log(data);

        if (res.status !== 200 || !data) {
          console.log("Server responded with an error message");
        } else {
          toast.success("user Logout 😃!", {
            position: "top-center",
          });

          // Remove the token from local storage
          window.localStorage.removeItem("app-token");

          // Redirect to a new location using React Router's history
          navigate("/");

          // Set the account to false or perform any other necessary state updates
          setAccount(false);
        }
      } else {
        setAccount(true);
        // User canceled the logout, do nothing or handle it as needed
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handelopen = () => {
    // console.log("handelopen");
    setDrawopen(true);
  };

  const handldrawclose = () => {
    setDrawopen(false);
  };

  const getText = (items) => {
    setText(items);
    setLiopen(false);
  };

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };
  return (
    <header className="fixed bg-gray-700 text-white top-0 w-full z-10">
      <nav className="container mx-auto flex justify-between items-center py-2">
        <div className="left flex items-center flex-1 gap-9">
          <IconButton className="visible md:invisible" onClick={handelopen}>
            <MenuIcon className="text-white" />
          </IconButton>
          <Drawer open={drawOpen} onClose={handldrawclose}>
            <Rightheader drawClose={handldrawclose} logoutuser={logoutuser} />
          </Drawer>
          <div className="navlogo">
            <NavLink to="/">
              Home
              {/* <img alt="logo" src={logo} className="w-32" /> */}
            </NavLink>
          </div>
          <div className="nav_searchbaar relative flex items-center h-16">
            <input
              type="text"
              id=""
              name=""
              placeholder="Search your Product"
              value={text}
              onChange={(e) => getText(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="w-64 border-none outline-none rounded-l-md px-4 py-2 text-black pl-6"
            />
            {!isInputFocused && (
              <div className="search_icon rounded-r-md flex items-center justify-center cursor-pointer absolute ">
                <Search
                  id="search"
                  className="text-black cursor-pointer rounded-tr-3 rounded-br-3"
                />
              </div>
            )}
            {text && (
              <List
                className="absolute bg-white text-black top-14 w-96"
                hidden={liOpen}
              >
                {carddatas
                  .filter((product) =>
                    product.name.toLowerCase().includes(text.toLowerCase())
                  )
                  .map((product) => (
                    <ListItem key={product.id}>
                      <Link to={`/getproduct/${product.id}`}>
                        <div>{product.name}</div>
                      </Link>
                    </ListItem>
                  ))}
              </List>
            )}
          </div>
        </div>
        <div className="mr-6 flex items-center">
          <div className="nav_btn mr-2">
            <NavLink
              to="/login"
              className="text-white text-lg font-semibold mb-4"
            >
              signin
            </NavLink>
          </div>
          {account ? (
            <NavLink to="/buynow">
              <div className="flex items-center ml-6 cursor-pointer mt-2 p-2 border border-solid border-gray-800 hover:border-white rounded">
                <Badge badgeContent={account.carts ? account.carts.length : 0}>
                  <ShoppingCart color="white" />
                </Badge>
                <NavLink to="/buynow">
                  <p className="text-white ml-1">Cart</p>
                </NavLink>
              </div>
            </NavLink>
          ) : (
            <NavLink to="/login">
              <div className="flex items-center ml-6 cursor-pointer mt-2 p-2 border border-solid border-gray-800 hover:border-white rounded">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCart />
                </Badge>
                <p className="text-white font-medium text-base mt-3 mr-4">
                  Cart
                </p>
              </div>
            </NavLink>
          )}
          {account ? (
            account.firstname ? (
              <Avatar
                className="cursor-pointer ml-2 bg-blue-300"
                style={{
                  cursor: "pointer",
                  marginLeft: "2",
                  backgroundColor: "blue",
                }}
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                title={account.firstname.toUpperCase()}
              >
                {account.firstname[0].toUpperCase()}
              </Avatar>
            ) : (
              <Avatar
                className="avtar ml-2"
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              />
            )
          ) : (
            <Avatar
              className="avtar ml-2"
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            />
          )}
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {account ? (
              <MenuItem onClick={handleClose}>
                <Logout style={{ fontSize: 12 }} onClick={logoutuser} />
                Logout
              </MenuItem>
            ) : (
              ""
            )}
          </Menu>
          <ToastContainer />
        </div>
      </nav>
    </header>
  );
}
export default Nav1;
