import React from "react";

function MsgAdvt({ MsgAdv }) {
  return (
    <div>{MsgAdv !== "" && <p className="text-green-200">{MsgAdv}</p>}</div>
  );
}

export default MsgAdvt;
