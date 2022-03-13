import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import FormSend from "../Components/FormSend";
import Head from "../Components/Head";
import Messages from "../Components/Messages";
export const socket = io("https://chatttio.herokuapp.com/");

function Chat() {
  let location = useLocation();
  const [Mensaje, setMensaje] = useState("");
  const userName = location.state;

  function SendMessage(e) {
    e.preventDefault();
    if (Mensaje !== "") {
      socket.emit("sendMessage", {
        userName: userName,
        message: Mensaje,
      });
      setMensaje("");
    }
  }

  return (
    <>
      <div>
        <Head />
        <h1 className="text-center laptop:text-2xl tablet:text-xl tablet:my-5 font-semibold">
          Inicio Chat Global con el UserName{" "}
          <p className="text-red-500">---* {userName} *---- </p>
        </h1>
        <Messages />
        <FormSend
          Mensaje={Mensaje}
          setMensaje={setMensaje}
          SendMensaje={SendMessage}
        />
      </div>
    </>
  );
}

export default Chat;
