import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Head() {
  let navigate = useNavigate();
  let location = useLocation();
  function NavigatesRoutes(route) {
    navigate("/" + route, {
      state: location.state,
    });
  }

  return (
    <div className="App font-mono text-2xl font-bold bg-gray-50 w-screen  ">
      <header className="flex justify-between items-center py-2 my-2">
        <h1 className=" inline px-8 ">Chat Secret io</h1>
        <div className="text-right mx-7 inline">
          <button
            onClick={() => NavigatesRoutes("Rooms")}
            className="mx-5 text-1xl text-red-500 bg-red-200 px-3 py-4 rounded text-right "
          >
            Salas Privadas
          </button>
          <button
            onClick={() => NavigatesRoutes("chat")}
            className="mx-5 text-1xl text-red-500 bg-red-200 px-3 py-4 rounded text-right "
          >
            Chat Global
          </button>
          <button
            onClick={() => NavigatesRoutes("login")}
            className="mx-5 text-1xl text-red-500 bg-red-200 px-3 py-4 rounded text-right "
          >
            Cerrar Session
          </button>
        </div>
      </header>
    </div>
  );
}

export default Head;
