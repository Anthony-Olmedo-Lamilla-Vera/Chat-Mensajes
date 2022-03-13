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
    <div className="App font-mono text-2xl bg-purple-500 font-bold w-screen ">
      <header className="md:flex text-center justify-between items-center py-2  ">
        <h1 className="md:inline px-8 sm:my-2 w-screen text-4xl my-3 ">
          Chat Secret io
        </h1>
        <div className="md:text-right md:mx-7 md:inline">
          <button
            onClick={() => NavigatesRoutes("Rooms")}
            className="md:mx-5 tablet:my-2 mx-1 py-2 px-1 text-xl md:text-1xl text-red-500 bg-red-200 md:px-3 md:py-4 rounded text-right "
          >
            Salas Privadas
          </button>
          <button
            onClick={() => NavigatesRoutes("chat")}
            className="md:mx-5 mx-1 tablet:my-2 py-2 px-1 text-xl md:text-1xl  text-red-500 bg-red-200 md:px-3 md:py-4 rounded text-right "
          >
            Chat Global
          </button>
          <button
            onClick={() => NavigatesRoutes("login")}
            className="md:mx-5 mx-1 tablet:my-2 px-1 py-2 text-xl md:text-1xl text-red-500 bg-red-200 md:px-3 md:py-4 rounded text-right "
          >
            Cerrar Session
          </button>
        </div>
      </header>
    </div>
  );
}

export default Head;
