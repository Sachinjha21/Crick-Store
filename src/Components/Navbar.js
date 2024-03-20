import { useState } from "react";
import upArr from "./Pictures/white-uparr.png";
import dwnArr from "./Pictures/white-dwnarr.png";
import cartpic from "./Pictures/cart.png";
import { Link } from "react-router-dom";
//login
import profile from "./Pictures/profile3.png";
import google from "./Pictures/google.png";
import facebook from "./Pictures/facaebook.png";
import { useEffect } from "react";

const Navbar = (props) => {
  const [showTop, setShowTop] = useState(false);
  const [arrow, setArrow] = useState(dwnArr);
  const [showMenu, setShowMenu] = useState(
    window.innerWidth < 768 ? false : true
  );
  const [login, setLogin] = useState(false);
  const [cart, setCart] = useState({
    width: "0",
  });

  const [changeMenuBtn, setChangeMenuBtn] = useState(<>&#9776;</>);
  const [category, setCategory] = useState(false);
  const [passwordVisibility, setPasswordVisiblity] = useState("Show");

  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= 100) {
      setShowTop(true);
    } else {
      setShowTop(false);
    }
  });

  const handleMenu = () => {
    if (showMenu === false) {
      setShowMenu(true);
      setChangeMenuBtn(<>&times;</>);
    } else {
      setShowMenu(false);
      setChangeMenuBtn(<>&#9776;</>);
    }
  };
  //for closing the nav while clicking any links
  const handleCloseNav = () => {
    if (window.innerWidth < 768) {
      setShowMenu(false);
      if (showMenu === true) {
        setChangeMenuBtn(<>&#9776;</>);
      } else {
        setChangeMenuBtn(<>&times;</>);
      }
    }
  };

  const showCategory = () => {
    if (category === false) {
      setCategory(true);
      setArrow(upArr);
    } else {
      setCategory(false);
      setArrow(dwnArr);
    }
  };

  const showContact = () => {
    window.scrollTo({
      top: 5000,
      behavior: "instant",
    });
    if (window.innerWidth < 768) {
      setShowMenu(false);
      if (showMenu === true) {
        setChangeMenuBtn(<>&#9776;</>);
      } else {
        setChangeMenuBtn(<>&times;</>);
      }
    }
  };

  const handleLogin = () => {
    if (login === false) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  const hideLogin = () => {
    setLogin(false);
  };

  const handleCart = () => {
    if (cart.width === "0") {
      if (window.innerWidth <= 720) {
        setCart({
          width: "100%",
        });
      } else if (window.innerWidth > 720 && window.innerWidth <= 1000) {
        setCart({
          width: "50%",
          transition: "width 0.5s",
        });
      } else {
        setCart({
          width: "30%",
          transition: "width 0.5s",
        });
      }
    } else {
      setCart({
        width: "0",
        transition: "width 0.5s",
      });
    }
  };
  const closeCart = () => {
    setCart({
      width: "0",
      transition: "width 0.5s",
    });
  };

  //password visibility
  const handlePasswordVisibility = () => {
    let password = document.querySelector("#password");
    console.log("show password");
    if (password.type === "password") {
      password.type = "text";
      setPasswordVisiblity("Hide");
    } else {
      password.type = "password";
      setPasswordVisiblity("Show");
    }
  };

  console.log(props.sendCart);

  return (
    <>
      <div className=" box-border overflow-hidden">
        <nav className="bg-rose-800 text-white block md:flex md:justify-between md:items-center fixed z-10 top-0 w-[100%]">
          <div className="flex justify-between items-center">
            <div className=" px-5 text-xl font-bold py-2 ">Cric Store</div>
            <div className=" md:hidden items-center mx-6 text-xl flex space-x-2">
              <li
                className=" bg-blue-500 px-3 py-1 rounded-md mr-2 cursor-pointer hover:bg-blue-600 list-none"
                onClick={handleLogin}
              >
                Log in
              </li>
              <img
                onClick={handleCart}
                src={cartpic}
                alt="img not found"
                className="h-8 mx-1 hover:cursor-pointer"
              />
              <button onClick={handleMenu}>{changeMenuBtn}</button>
            </div>
          </div>
          {showMenu && (
            <ul
              className={`bg-zinc-600 px-5 py-3 md:flex md:items-center md:bg-inherit md:space-x-12`}
            >
              <li className="cursor-pointer" onClick={handleCloseNav}>
                <Link to="/">Home</Link>
              </li>
              {/* <li className="cursor-pointer">
                <Link to="/stock">About</Link>
              </li> */}
              <li className="cursor-pointer relative" onClick={showCategory}>
                Category
                <img
                  src={arrow}
                  alt="image not found"
                  className=" h-3 w-3 inline-block ml-[4px]"
                />
                {category && (
                  <ul className=" bg-inherit ml-8 md:absolute md:bg-slate-50 md:text-black md:rounded-sm md:shadow-black md:shadow-sm  md:top-8">
                    <li
                      className=" md:hover:bg-blue-400 md:hover:text-white md:px-6 md:rounded-t-sm"
                      onClick={handleCloseNav}
                    >
                      <Link to="/bat">Bat</Link>
                    </li>
                    <li
                      className=" md:hover:bg-blue-400 md:hover:text-white md:px-6"
                      onClick={handleCloseNav}
                    >
                      <Link to="/ball">Ball</Link>
                    </li>
                    <li
                      className=" md:hover:bg-blue-400 md:hover:text-white md:px-6"
                      onClick={handleCloseNav}
                    >
                      <Link to="/bag">Bag</Link>
                    </li>
                    <li
                      className=" md:hover:bg-blue-400 md:hover:text-white md:px-6"
                      onClick={handleCloseNav}
                    >
                      <Link to="/gloves">Gloves</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="cursor-pointer" onClick={showContact}>
                Contact Us
              </li>
              <li
                className=" hidden md:block md:bg-blue-500 md:px-3 md:py-1 rounded-md md:mr-2 cursor-pointer md:hover:bg-blue-600"
                onClick={handleLogin}
              >
                Log in
              </li>
              <li onClick={handleCart}>
                <img
                  src={cartpic}
                  alt="img not found"
                  className=" hidden md:block h-8 mx-1 hover:cursor-pointer "
                />
              </li>
            </ul>
          )}
        </nav>
      </div>

      {/* login */}

      {login && (
        <div className="bg-slate-100 text-center h-[100%] lg:w-1/3 lg:h-fit lg:pb-5 lg:rounded-sm lg:shadow-black lg:shadow-sm lg:top-16 fixed lg:right-5 w-full z-10 ">
          <span
            className=" inline-block float-right mr-3 font-bold text-2xl cursor-pointer"
            onClick={hideLogin}
          >
            {" "}
            &times;
          </span>
          <p className=" text-center text-2xl font-bold text-blue-600">
            Log in{" "}
          </p>
          <img
            src={profile}
            alt="img not found"
            className=" h-24 mx-auto my-5"
          />
          <input
            type="email"
            placeholder="Enter email"
            className=" border-2 border-black rounded-sm py-1 px-5 text-lg my-1"
          />{" "}
          <br />
          <div className=" relative w-fit mx-auto">
            <label
              htmlFor="password"
              className=" absolute right-0 py-[10px] px-2"
              onClick={handlePasswordVisibility}
            >
              {passwordVisibility}
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="border-2 border-black rounded-sm py-1 px-5 text-lg my-1"
              id="password"
            />
          </div>
          <br />
          <button className=" bg-blue-600 active:bg-blue-700 text-white rounded-sm py-1 px-[6.2rem] text-lg my-1">
            Log in
          </button>
          <p className=" text-xl my-3">or</p>
          <p className=" text-blue-700 cursor-pointer hover:underline my-2">
            forgot password?
          </p>
          <button className=" bg-slate-200 active:bg-slate-300 px-10 rounded-sm shadow-sm shadow-black cursor-pointer text-lg py-1 my-2">
            <img
              src={google}
              alt="img not found"
              className=" h-5 inline-block mr-1"
            />
            Login with google
          </button>
          <br />
          <button className=" bg-slate-200 active:bg-slate-300 px-8 rounded-sm shadow-sm shadow-black cursor-pointer text-lg py-1 my-2">
            <img
              src={facebook}
              alt="img not found"
              className=" h-5 inline-block mr-1 "
            />
            Login with facebook
          </button>
          <p className=" my-4 text-lg">
            Don't have an account?{" "}
            <Link className=" text-blue-700 hover:underline"> sign in</Link>
          </p>
        </div>
      )}

      {/* cart */}
      <div
        className=" fixed h-full md:fit md:pb-5 w-32 right-0 bg-slate-50 text-lg text-black z-30 overflow-scroll"
        style={cart}
      >
        <div className="  items-center bg-pink-500 fixed py-1 w-full md:30rem ">
          <div className=" text-2xl  font-mono font-bold text-center ml-5 inline-block ">
            Your Cart
          </div>
          <div
            className=" text-2xl cursor-pointer mr-5 font-bold float-right inline-block md:mr-[52%] lg:mr-[71%]"
            onClick={closeCart}
          >
            &times;
          </div>
        </div>
        <div className=" mt-12 ">
          {" "}
          {props.sendCart.map((cartItem, index) => {
            return (
              <div
                className=" rounded-md shadow-sm shadow-black m-3 "
                key={index}
              >
                <img
                  src={cartItem.img}
                  alt="img not found"
                  className="h-60 bg-white mx-auto"
                />
                <hr className="bg-black h-[2px]" />
                <div className="pb-3 pt-1 px-3">
                  <p>Rating: {cartItem.rating}</p>
                  <div className=" flex space-x-3 items-center">
                    <p>Price: {cartItem.price}</p>
                    <button className=" bg-yellow-500 text-white text-md rounded-full hover:bg-yellow-600 active:bg-slate-500 py-1 px-3">
                      Buy now
                    </button>
                    <button
                      className=" bg-red-500 text-white text-md rounded-full hover:bg-red-600 active:bg-slate-500 py-1 px-3"
                      onClick={() => {
                        console.log("clicked");
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
