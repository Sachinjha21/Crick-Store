import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Showpiece from "./Components/Pages/Showpiece";
import Bat from "./Components/Pages/Bat";
import Bag from "./Components/Pages/Bag";
import Gloves from "./Components/Pages/Gloves";
import Ball from "./Components/Pages/Ball";
import Stock from "./Components/Pages/Stock";
import AddItem from "./Components/AddItem";
import ShowItems from "./Components/ShowItems";
function App() {
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [sendCartItem, setSendCartItem] = useState([]);

  // const [sendData, setSendData] = useState([]);
  // const getDta = (dta) => {
  //   setSendData([...sendData, dta]);
  // };

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= 200) {
      setShowScrollBtn(true);
    } else {
      setShowScrollBtn(false);
    }
  });
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const cartItem = (item) => {
    console.log(item);
    setSendCartItem([...sendCartItem, item]);
  };
  return (
    <>
      <div>
        {/* <Login /> */}
        <Navbar sendCart={sendCartItem} />
        <Home />
        <Routes>
          <Route
            path="/"
            element={<Showpiece receiveCart={cartItem} />}
          ></Route>
          <Route path="/bat" element={<Bat receiveCart={cartItem} />}></Route>
          <Route path="/ball" element={<Ball receiveCart={cartItem} />}></Route>
          <Route path="/bag" element={<Bag receiveCart={cartItem} />}></Route>
          <Route
            path="/gloves"
            element={<Gloves receiveCart={cartItem} />}
          ></Route>
          <Route path="/stock" element={<Stock />}></Route>
        </Routes>
        <Footer />

        {/* <AddItem receiveData={getDta} />
        <ShowItems sendDetails={sendData} /> */}

        {showScrollBtn && (
          <button
            className=" bg-red-600 text-white text-2xl font-bold rounded-full shadow-sm shadow-black w-10 h-10 fixed right-10 bottom-12"
            onClick={handleScrollTop}
          >
            &uarr;
          </button>
        )}
      </div>
    </>
  );
}

export default App;
