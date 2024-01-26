

import Viewcart from "./components/Cart-section/Viewcart";
import Checkout from "./components/Checkout/Checkout";
import { Outlet, Route, Routes } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Index from "./components/Homepage";
import SignIn from "./components/signin-up/SignIn";
import SignUp from "./components/signin-up/SignUp";
import Buynow from "./buynow/Buynow";
import Addtocart from "./components/Cart-section/Addtocart";
import Nav1 from "./components/Nav/Nav1";


function App() {
  return (
    <>
      <div className="w-full">
      <Nav1 />
        <Outlet />

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/getproduct/:id" element={<Viewcart />} />
          <Route path="/viewcart/:id" element={<Viewcart />} />
          <Route path="/addtocart/:id" element={<Addtocart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/buynow" element={<Buynow />} />
          {/* Add more routes as needed */}
        </Routes>

        {/* <DealoftheDay /> */}
      </div>
    </>
  );
}

export default App;
