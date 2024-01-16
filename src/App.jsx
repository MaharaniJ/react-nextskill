import Mycart from "./components/Cart-section/Mycart";

import Viewcart from "./components/Cart-section/Viewcart";
import Checkout from "./components/Checkout/Checkout";
import { Outlet, Route, Routes } from "react-router-dom";

import Index from "./components/Homepage";
import SignIn from "./components/signin-up/SignIn";
import SignUp from "./components/signin-up/SignUp";

function App() {
  return (
    <>
      <div className="w-full">
        {/* <Outlet /> */}

        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/viewcart/:id" element={<Viewcart />} />
          <Route path="/addtocart/:id" element={<Mycart />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/login" element={<SignIn />} />
          <Route  path="/register" element={<SignUp />} />
          {/* Add more routes as needed */}
        </Routes>

        {/* <DealoftheDay /> */}
      </div>
    </>
  );
}

export default App;
