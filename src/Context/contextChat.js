import React, { useState } from "react";

export const MyContext = React.createContext();

function ContextChat({ children }) {
  const [ChatMensajes, setMessages] = useState([]);
  return (
    <MyContext.Provider value={{ ChatMensajes, setMessages }}>
      {children}
    </MyContext.Provider>
  );
}

export default ContextChat;
