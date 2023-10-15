import React from "react";
import loaderImage from "./fastcuraLogo.gif";
import loader from '../media/loaderNew.png'

interface ILoader {
  isLoading?: boolean;
}

const Loader = ({ isLoading }: ILoader) => {
  if (isLoading) {
    return (
      <>
        <div
          style={{
            backgroundColor: "rgb(255, 255, 255,0.5)",
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
          <img src={loader} alt={"loader"} width={"300px"} />
        </div>
      </>
    );
  } else {
    return <></>;
  }
};

export default Loader;
