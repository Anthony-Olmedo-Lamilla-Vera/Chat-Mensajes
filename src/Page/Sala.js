import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Emisor from "../Components/Emisor";
import FormSend from "../Components/FormSend";

import Receptor from "../Components/Receptor";
import { socket } from "./Chat";

const useMensaje = () => {
  const [Mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.on("SendMessagetoRoom", (data) => {
      setMensajes([...Mensajes, data]);
    });
    socket.on("SendMessagetoRoomEmisor", (data) => {
      setMensajes([...Mensajes, data]);
    });
    socket.on("JoinRoom", (msgRoom) => {
      setMensajes([...Mensajes, { msgRoom: msgRoom.msg }]);
    });
  }, [Mensajes]);

  return Mensajes;
};

function Sala() {
  const [Mensaje, setMensaje] = useState("");
  const MensajesChat = useMensaje();
  const location = useLocation();
  const navigate = useNavigate();
  const State_nav_sala = location.state;

  function NavigatePrivate(e) {
    e.preventDefault();
    navigate("/Rooms", { state: State_nav_sala.userName });
  }

  function SendMensaje(e) {
    e.preventDefault();
    if (Mensaje !== "") {
      socket.emit("SendMessageRoom", {
        sala: State_nav_sala.sala,
        userName: State_nav_sala.userName,
        Mensaje: Mensaje,
      });
    }
  }

  return (
    <div>
      <div className="App font-mono text-2xl font-bold bg-gray-50 w-screen  ">
        <header className="flex justify-between items-center py-2 my-2">
          <h1 className=" inline px-8 ">Chat Secret io</h1>
          <div className="text-right mx-7 inline">
            <button
              onClick={NavigatePrivate}
              className="mx-5 text-1xl text-red-500 bg-red-200 px-3 py-4 rounded text-right "
            >
              Salir de la Sala
            </button>
          </div>
        </header>
      </div>
      <h1 className="text-center text-2xl font-semibold">
        Inicio Chat en sala privada
        <p className="text-red-500">
          ---* {State_nav_sala && State_nav_sala.userName} *---- sala ={" "}
          {State_nav_sala && State_nav_sala.sala}
        </p>
      </h1>

      <div className="bg-green-50 h-80 py-5 px-8 overflow-y-scroll w-2/4 mx-auto scroll">
        {MensajesChat
          ? MensajesChat.map((Item, key) => {
              Item.msgRoom && <p>{Item.msgRoom}</p>;
              return Item.msgRoom ? (
                <p className="text-center text-green-800 bg-white mx-auto my-5 max-w-max">
                  {Item.msgRoom}
                </p>
              ) : State_nav_sala.userName === Item.userName ? (
                <Emisor
                  key={key}
                  Username={Item.userName}
                  Mensaje={Item.Mensaje}
                />
              ) : State_nav_sala.userName !== Item.userName ? (
                <Receptor
                  key={key}
                  Username={Item.userName}
                  Mensaje={Item.Mensaje}
                />
              ) : (
                ""
              );
            })
          : ""}
      </div>
      <FormSend
        Mensaje={Mensaje}
        setMensaje={setMensaje}
        SendMensaje={SendMensaje}
      />
    </div>
  );
}

export default Sala;
