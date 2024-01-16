import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Nav/Navbar";
import Banner from "./Banner";
import Cart from "./Cart";
import Layout from "./Layout";

function Index(){
    return(
        <>
         <Header />
         <Navbar />
         <Banner />
         <Layout />
         <Cart />
         <Footer />
        </>
    )
}
export default Index;