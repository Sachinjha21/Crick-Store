import React from "react";
import gloves from "../Pictures/gloves1.png";
import gloves1 from "../Pictures/gloves2.png";
import gloves2 from "../Pictures/gloves3.png";
import gloves3 from "../Pictures/gloves4.png";
import gloves4 from "../Pictures/gloves5.png";
import gloves5 from "../Pictures/gloves6.png";

const Gloves = (props) => {
  let oneStar = (
    <>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
    </>
  );
  let twoStar = (
    <>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
    </>
  );
  let threeStar = (
    <>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
    </>
  );

  let fourStar = (
    <>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
    </>
  );
  let fiveStar = (
    <>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
      <span className=" text-yellow-400 text-lg font-bold">&#9733;</span>
    </>
  );
  const glovesCollection = [
    {
      id: Math.random().toString(),
      kit: gloves,
      price: "Rs. 6000",
      kitName: "Gloves",
      rating: fourStar,
    },
    {
      id: Math.random().toString(),
      kit: gloves1,
      price: "Rs. 6500",
      kitName: "Gloves",
      rating: fourStar,
    },
    {
      id: Math.random().toString(),
      kit: gloves2,
      price: "Rs. 700",
      kitName: "Gloves",
      rating: fourStar,
    },
    {
      id: Math.random().toString(),
      kit: gloves3,
      price: "Rs. 8000",
      kitName: "Gloves",
      rating: fiveStar,
    },
    {
      id: Math.random().toString(),
      kit: gloves4,
      price: "Rs. 6000",
      kitName: "Gloves",
      rating: fourStar,
    },
    {
      id: Math.random().toString(),
      kit: gloves5,
      price: "Rs. 8000",
      kitName: "Gloves",
      rating: fourStar,
    },
  ];
  return (
    <>
      <div>
        <hr className="bg-black h-[2px]" />
        <p className=" text-2xl mx-2 lg:text-center">
          {" "}
          {"< Gloves Collection >"}{" "}
        </p>
        <hr className="bg-black h-[1px]" />

        {glovesCollection.map((val, index) => {
          return (
            <div
              className=" rounded-md shadow-sm shadow-black m-3 md:mx-10 lg:w-[30%] lg:inline-block lg:mx-6"
              key={index}
            >
              {/* <p className="text-center bg-yellow-300 rounded-t-md text-xl">
                {val.kitName}
              </p> */}
              <img
                src={val.kit}
                alt="img not found"
                className="h-60 bg-white mx-auto"
              />
              <hr className="bg-black h-[2px]" />
              <div className="pb-3 pt-1 px-3">
                <p>Rating: {val.rating}</p>
                <div className=" flex space-x-3 items-center">
                  <p>Price: {val.price}</p>
                  <button className=" bg-yellow-500 text-white text-md rounded-full hover:bg-yellow-600 active:bg-slate-500 py-1 px-3">
                    Buy now
                  </button>
                  <button
                    className=" bg-blue-600 text-white text-md rounded-full hover:bg-blue-700 active:bg-slate-500 py-1 px-3"
                    onClick={() => {
                      const cartItem = {
                        name: val.kitName,
                        price: val.price,
                        img: val.kit,
                        rating: val.rating,
                      };
                      props.receiveCart(cartItem);
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gloves;
