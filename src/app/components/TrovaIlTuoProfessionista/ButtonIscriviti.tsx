import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const ButtonIscriviti = () => {
  const [token, setToken] = useState("");
  const [type, setType] = useState("");

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    const type = await localStorage.getItem("type");

    if (!!type) setType(type);
    if (!!tokenTest) setToken(tokenTest);
  };

  useEffect(() => {
    takeToken();
  }, []);


  return (
    <>
      {token !== "" && type === "1" && (
        <Link to="/professionista">
          <button
            style={{
              backgroundColor: "#ffffff",
              height: 30,
              marginLeft: 1,
              fontSize: "11px",
              textTransform: "none",
              color: "rgb(57, 177, 217)",
              borderColor: "rgb(57, 177, 217)",
              border: "solid 2px",
              borderRadius: 10,
              fontWeight: "bold",
            }}
          >
            Accedi alla Dashboard
          </button>
        </Link>
      )}
      {token !== "" && type === "0" && (
        <Link to="/cliente">
          <button
            style={{
              backgroundColor: "#ffffff",
              height: 30,
              marginLeft: 1,
              fontSize: "11px",
              textTransform: "none",
              color: "rgb(57, 177, 217)",
              borderColor: "rgb(57, 177, 217)",
              border: "solid 2px",
              borderRadius: 10,
              fontWeight: "bold",
            }}
          >
            Accedi alla Dashboard
          </button>
        </Link>
      )}
      {token === "" && (
        <Link to="/landing-professionista">
          <button
            style={{
              backgroundColor: "#ffffff",
              height: 30,
              marginLeft: 1,
              fontSize: "11px",
              textTransform: "none",
              color: "rgb(57, 177, 217)",
              borderColor: "rgb(57, 177, 217)",
              border: "solid 2px",
              borderRadius: 10,
              fontWeight: "bold",
            }}
          >
            Sei un professionista? Iscriviti!
          </button>
        </Link>
      )}
    </>
  );
};

export default ButtonIscriviti;
