import React, { useState } from "react";
import MsgAdvt from "./MsgAdvt";

function FormInput({ submit, nameButton }) {
  const [NameRoom, setNameRoom] = useState("");
  const [MsgAdv, setMsgAdv] = useState("");
  //const [PasswordRoom, setPasswordRoom] = useState();

  return (
    <>
      <form
        action=""
        onSubmit={(e) => submit(NameRoom, setNameRoom, e, setMsgAdv)}
        className="my-9 text-center rounded-2xl tablet:w-2/5  laptop:w-2/4 laptop:max-w-max bg-purple-600 py-5 px-5  mx-auto h-2/3"
      >
        <MsgAdvt MsgAdv={MsgAdv} />
        <div className="mt-2 bg-purple-400 w-full p-2 rounded">
          <label className="mr-5 mb-5 font-bold laptop:text-2xl" htmlFor="">
            Nombre Sala
          </label>
          <input
            value={NameRoom}
            className=" laptop:px-2 laptop:py-3 tablet:w-full tablet:py-2 w-15 tablet:px-1 tablet:mx-0 tablet:w-15  border-3 border-purple-200 outline-none my-2 rounded"
            type="text"
            onChange={(e) => setNameRoom(e.target.value)}
            placeholder="#123"
          />
        </div>
        <div>
          {/*<div className="mt-2 bg-purple-400 p-2 rounded">
        <label className="mr-5 mb-5 font-bold " htmlFor="">
        Contraseña Sala
        </label>
        <input
        className="px-2 cursor-pointer py-3 border-2 border-purple-200 outline-none my-2 rounded"
        type="text"
        placeholder="password"
        />
        </div>
      */}
        </div>
        <input
          type="submit"
          className="bg-black text-purple-500 px-8 laptop:text-xl tablet:text-base text-center tablet:px-2 py-3 rounded-xl font-bold text-center my-5 mx-auto"
          value={nameButton}
        />
      </form>
    </>
  );
}

export default React.memo(FormInput);
