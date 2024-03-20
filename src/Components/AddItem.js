import React, { useState } from "react";

const AddItem = (props) => {
  const [name, setName] = useState([]);
  const [price, setPrice] = useState([]);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const handleData = () => {
    const storeItemsDetails = {
      itemName: name,
      itemPrice: price,
    };

    props.receiveData(storeItemsDetails);

    setName("");
    setPrice("");
  };
  return (
    <>
      <div className="  text-center flex justify-center">
        <div className=" w-fit bg-gray-100 rounded-lg  shadow-sm shadow-black mx-1">
          <p className=" text-2xl text-white bg-sky-500 rounded-t-lg">
            Add Items Here
          </p>

          <input
            value={name}
            onChange={handleName}
            type="text"
            placeholder="Enter Item Name"
            className="  mx-5 py-1 my-5 px-2 border-black  rounded-md border-2"
          />
          <input
            value={price}
            onChange={handlePrice}
            type="number"
            placeholder="Enter Item Price"
            className=" py-1 px-2 mx-5 rounded-md border-2 border-black"
          />
          <br></br>
          <button
            onClick={handleData}
            className=" bg-blue-600 hover:bg-blue-700 text-white px-5 py-1 rounded-md shadow-sm shadow-black my-3"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default AddItem;
