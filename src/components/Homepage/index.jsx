import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Nav1 from "../Nav/Nav1";
import Navbar from "../Nav/Navbar";
import Banner from "./Banner";
import Cart from "./Cart";
import Layout from "./Layout";

function Index() {
  return (
    <>
      <Nav1 />
      {/* <Header /> */}
      <Navbar />

      <Banner />
      <Layout />
      <Cart />
      <Footer />
    </>
  );
}
export default Index;
