import "./App.css";
import Chat from "./Page/Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginUser from "./Page/LoginUser";
import Rooms from "./Page/Rooms";
import Head from "./Components/Head";
import Sala from "./Page/Sala";
import PageGit from "./Page/pagegit";

function App() {
  return (
    <div className="font-mono ">
      <Routes>
        <Route path="/Login" element={<LoginUser />} />
        <Route path="/chat" exact element={<Chat />} />
        <Route path="/Rooms" exact element={<Rooms />} />
        <Route path="/Sala" exact element={<Sala />} />
        <Route path="/Chat-Mensajes" exact element={<PageGit />} />
      </Routes>
    </div>
  );
}

export default App;