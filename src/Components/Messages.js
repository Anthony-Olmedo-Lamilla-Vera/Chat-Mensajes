import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { socket } from "../Page/Chat";
import Emisor from "./Emisor";
import Receptor from "./Receptor";

export const useMessage = (evento1, evento2) => {
  const [Mensajes, setMensajes] = useState([]);

  useEffect(() => {
    socket.on(evento1, (data) => {
      setMensajes([...Mensajes, data]);
    });
    socket.on(evento2, (data) => {
      setMensajes([...Mensajes, data]);
    });
  }, [Mensajes]);

  return Mensajes;
};

function Messages() {
  const MensajesChat = useMessage("ReceptorMessage", "EmisorMessage");
  let location = useLocation();
  const userName = location.state;

  setTimeout(() => {
    const scroll = document.querySelector(".scroll");
    scroll.scrollTo(0, document.body.scrollHeight);
  }, 100);

  return (
    <div className="bg-green-50 h-80 py-5 px-8 overflow-y-scroll w-2/4 mx-auto scroll">
      {MensajesChat
        ? MensajesChat.map((Item, key) => {
            return userName === Item.userName ? (
              <Emisor
                key={key}
                Username={Item.userName}
                Mensaje={Item.message}
              />
            ) : (
              <Receptor
                key={key}
                Username={Item.userName}
                Mensaje={Item.message}
              />
            );
          })
        : ""}
    </div>
  );
}

export default Messages;
