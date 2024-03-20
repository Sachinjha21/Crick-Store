import React from "react";

const ShowItems = (props) => {
  return (
    <>
      <div className=" bg-slate-500 w-[97%] mx-auto my-2 pb-5 rounded-md h-fit md:w-[70%]">
        <p className=" text-white text-2xl font-bold text-center bg-slate-700 rounded-t-md">
          Items Details
        </p>
        {props.sendDetails.map((val, index) => {
          return val.itemName ? (
            <div
              key={index}
              className="flex bg-gray-900 text-white  justify-between px-5 py-2 mx-5 my-2 rounded-md items-center"
            >
              <div className=" text-2xl "> {val.itemName}</div>
              <div className=" text-xl bg-red-500 rounded-md px-5 py-1">
                {` $ ${val.itemPrice}`}
              </div>
            </div>
          ) : (
            ""
          );
        })}
      </div>
    </>
  );
};

export default ShowItems;
