import React from "react";
import bag from "../Pictures/bag.png";
import bag1 from "../Pictures/bag1.png";
import bag2 from "../Pictures/bag2.png";
import bag3 from "../Pictures/bag3.png";
import bag4 from "../Pictures/bag6.png";
import bag5 from "../Pictures/bag7-cool.png";

const Bag = (props) => {
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
  const bagCollection = [
    {
      id: Math.random().toString(),
      kit: bag5,
      price: "Rs. 13000",
      kitName: "Bag",
      rating: fiveStar,
    },
    {
      id: Math.random().toString(),
      kit: bag1,
      price: "Rs. 7000",
      kitName: "Bag",
      rating: threeStar,
    },
    {
      id: Math.random().toString(),
      kit: bag2,
      price: "Rs. 12000",
      kitName: "Bag",
      rating: fourStar,
    },
    {
      id: Math.random().toString(),
      kit: bag3,
      price: "Rs. 6000",
      kitName: "Bag",
      rating: threeStar,
    },
    {
      id: Math.random().toString(),
      kit: bag4,
      price: "Rs. 11000",
      kitName: "Bag",
      rating: fourStar,
    },
    {
      id: Math.random().toString(),
      kit: bag,
      price: "Rs. 95000",
      kitName: "Bag",
      rating: threeStar,
    },
  ];
  return (
    <>
      <div>
        <hr className="bg-black h-[2px]" />
        <p className=" text-2xl mx-2 lg:text-center">
          {" "}
          {"< Bag Collection >"}{" "}
        </p>
        <hr className="bg-black h-[1px]" />

        {bagCollection.map((val, index) => {
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

export default Bag;
