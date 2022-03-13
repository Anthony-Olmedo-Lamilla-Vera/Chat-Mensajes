import React from "react";

function Receptor({ Username, Mensaje }) {
  return (
    <div className="bg-green-50 my-2 laptop:mx-9">
      <div className="inline">
        <div>
          <img
            className="laptop:w-20 tablet:w-14 rounded-full block"
            src="https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg"
            alt=""
          />
          <span className="text-xl text-bold">{Username}</span>
          <p className="inline px-5 laptop:text-xl tablet:mx-2 tablet:text-base bg-white laptop:mx-8 w-max items-center rounded content-center ">
            {Mensaje}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Receptor;
