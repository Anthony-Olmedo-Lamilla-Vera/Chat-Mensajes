import React from "react";

function FormSend({ Mensaje, setMensaje, SendMensaje }) {
  return (
    <form className="text-center">
      <textarea
        value={Mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        cols={50}
        rows={5}
        editable="none"
        className="border-15 border-black font-regular block mx-auto my-10 bg-gray-200 rounded px-8 py-2"
        placeholder="Escriba un mensaje"
        type="text"
      />

      <button
        onClick={SendMensaje}
        className="bg-green-300 px-8 py-2 rounded-full"
      >
        Enviar Mensaje
      </button>
    </form>
  );
}

export default FormSend;
