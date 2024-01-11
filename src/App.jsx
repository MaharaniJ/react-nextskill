import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Header from "./components/Header";
import Navbar from "./components/Nav/Navbar";
import Cart from "./components/Cart";
import Banner from "./components/Nav/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav/Nav";
import Layout from "./components/Layout";
import DealoftheDay from "./components/DealoftheDay";
import Mycart from "./components/Mycart";

import Viewcart from "./components/Viewcart";
import Checkout from "./components/Checkout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/viewcart/:id" element={<Viewcart />} />
        <Route path="/addtocart" element={<Mycart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <div className="w-full">
        <Header />
        <Nav />
        <Navbar />
        <Banner />
        <Layout />
        <Cart />

        {/* <DealoftheDay /> */}

        <Footer />
      </div>
    </>
  );
}

export default App;
