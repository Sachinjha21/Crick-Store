import React from "react";
import bat from "../Pictures/bat4.png";
import bag from "../Pictures/bag7-cool.png";
import ball from "../Pictures/ball6.png";
import { useState } from "react";

const Showpiece = (props) => {
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
  const showPiece = [
    {
      id: Math.random().toString(),
      kit: bat,
      price: "Rs. 11000",
      kitName: "Bat",
      rating: fiveStar,
    },
    {
      id: Math.random().toString(),
      kit: ball,
      price: "Rs. 850",
      kitName: "Ball",
      rating: fourStar,
    },
    {
      id: Math.random().toString(),
      kit: bag,
      price: "Rs. 13000",
      kitName: "Bag",
      rating: fiveStar,
    },
  ];

  // const handleAddToCart = () => {};
  return (
    <>
      <div className=" mx-auto">
        <hr className="bg-black h-[2px]" />
        <p className=" text-2xl mx-2 lg:text-center"> {"< Show Piece >"} </p>
        <hr className="bg-black h-[1px]" />

        {showPiece.map((val, index) => {
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

export default Showpiece;
