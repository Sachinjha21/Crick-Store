import React from "react";
import Cricket from "../Pictures/Cricket.png";

const Home = () => {
  return (
    <>
      <div className=" relative mt-5 bg-slate-300 flex flex-col pb-5 md:pt-10 md:flex-row-reverse md:justify-between md:items-center">
        <div className=" md:px-10">
          <img
            src={Cricket}
            alt="Img not found"
            className=" bg-slate-700 py-3 h-86 w-full md:bg-inherit mr-20 lg:w-80"
          />
        </div>
        <div className=" pl-3 py-3 lg:w-[50%] md:px-10 ">
          <p className=" text-xl md:text-2xl font-bold">
            Get the best quality Cricket kit here!!!
          </p>
          <p className=" w-[80%] md:[60%] lg:w-1/2 mt-2">
            Our Cric Store is a reputed Store for selling Cricket kit. We
            gurantee our customer the best Cricket kit at reasonable price.
            Utilize the opportunity and get the best cricket kit available in
            the market.
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
