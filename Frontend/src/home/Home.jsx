import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Freebook from "../components/freebook";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <div>
        <Navbar/>
        <Banner />
        <Freebook />
        <Footer />
      </div>
    </>
  );
}

export default Home;
