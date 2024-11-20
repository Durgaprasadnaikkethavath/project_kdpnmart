import React from "react";
import Navbar from "./Components/Navbar";
import ImageCarousel from "./Components/ImageCarousel";
import ShopContextProvider from "./Context/ShopContext";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <h1>Carousel images</h1>
        <h1>Next Carousel</h1>
        <Navbar />
        <ImageCarousel />
      </ShopContextProvider>
    </>
  );
};

export default App;
