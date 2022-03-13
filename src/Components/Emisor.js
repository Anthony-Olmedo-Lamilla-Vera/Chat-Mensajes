import React, { useEffect, useState } from "react";
import { socket } from "../Page/Chat";

function Emisor({ Username, Mensaje }) {
  return (
    <div className="  text-right my-2  laptop:mx-9">
      <p className="inline px-5 bg-white laptop:mx-8 laptop:text-xl tablet:mx-2 w-max items-center tablet:text-base rounded content-center ">
        {Mensaje}
      </p>
      <div className="inline">
        <img
          className="laptop:w-20 rounded-full inline tablet:w-14 "
          src="https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg"
          alt=""
        />
        <span className="text-xl block">{Username}</span>
      </div>
    </div>
  );
}

export default Emisor;
