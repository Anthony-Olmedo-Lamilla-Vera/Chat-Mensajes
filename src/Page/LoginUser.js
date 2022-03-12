import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function LoginUser() {
  const [FieldName, seTFieldName] = useState("");
  let navigate = useNavigate();

  function Login(e) {
    e.preventDefault();
    if (FieldName !== "") {
      navigate("/chat", {
        state: FieldName,
      });
    }
  }

  return (
    <div className="h-screen w-full text-center bg-black items-center  content-center">
      <div className="w-screen">
        <header>
          <h1 className="text-white text-3xl font-bold  text-center">
            Ingrese un UserName ...
          </h1>
        </header>
        <form action="" className="my-10">
          <input
            onChange={(e) => {
              seTFieldName(e.target.value);
            }}
            value={FieldName}
            className="bg-white-500 w-70 block mx-auto py-2 rounded px-10 "
            placeholder="digite su UserName ... "
            type="text"
          />
          <button
            onClick={Login}
            className="bg-white-500 text-white bg-purple-500 px-20 py-2 rounded font-bold text-2xl my-5"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginUser;
