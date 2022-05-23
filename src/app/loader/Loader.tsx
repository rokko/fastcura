import React from "react";
import loaderImage from "./fastcuraLogo.gif";

const Loader = () => {
  return (
    <>
      <div
        style={{
          background: "rgb(255, 255, 255, 0.5)",
          height: "100%",
          left: "0",
          position: "fixed",
          top: "0",
          width: " 100%",
          zIndex: " 9999",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img src={loaderImage} width={"300px"} />
      </div>
    </>
  );
};

export default Loader;
