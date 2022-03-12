import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FormInput from "../Components/FormInput";
import Head from "../Components/Head";
import { socket } from "./Chat";

function Rooms() {
  let navigate = useNavigate();
  let location = useLocation();

  console.log(location.state);

  function JoinRooms(name, setName, e, setMsgAdv) {
    e.preventDefault();
    socket.emit("JoinSala", {
      nameRoom: name,
      userName: location.state,
    });
    socket.on("msg-joinRoom", (msg) => {
      if (msg === "Entrando a Sala") {
        console.log("Entrando  a sala ");
        navigate("/Sala", {
          state: {
            sala: name,
            userName: location.state,
          },
        });
        setMsgAdv(msg);
        setName("");
      } else {
        setMsgAdv(msg);

        console.log("sala no existe");
      }
    });
  }
  const CreateRoom = (name, setName, e, setMsgAdv) => {
    e.preventDefault();
    if (name !== "") {
      socket.emit("CreateRomm", { nameRoom: name, userName: location.state });
      socket.on("MsgRoom", (msg) => {
        setMsgAdv(msg);
        console.log(msg);
        setName("");
      });
    }
  };

  return (
    <div>
      <Head />

      <main className="min-h-screen bg-black flex ">
        <FormInput submit={JoinRooms} nameButton="Ingresar a Sala" />
        <FormInput submit={CreateRoom} nameButton="Crear Sala" />
      </main>
    </div>
  );
}

export default Rooms;
