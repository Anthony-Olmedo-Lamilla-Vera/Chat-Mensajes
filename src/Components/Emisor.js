import React, { useEffect, useState } from "react";
import { socket } from "../Page/Chat";

function Emisor({ Username, Mensaje }) {
  return (
    <div>
      <div className="  text-right ">
        <p className="inline px-5 bg-white mx-8 w-max items-center rounded content-center ">
          {Mensaje}
        </p>
        <div className="inline">
          <img
            className="w-20 rounded-full inline "
            src="https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg"
            alt=""
          />
          <span className="text-xl block">{Username}</span>
        </div>
      </div>
    </div>
  );
}

export default Emisor;
