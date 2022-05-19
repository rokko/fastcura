import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import Header from "../components/TrovaIlTuoProfessionista/Header";
import BoxSearch from "../components/TrovaIlTuoProfessionista/BoxSearch";
import Lavagna from "../components/TrovaIlTuoProfessionista/Lavagna";
import HaiBisognoDiCure from "../components/TrovaIlTuoProfessionista/HaiBisognoDiCure";
import ProblemaRisolto from "../components/TrovaIlTuoProfessionista/ProblemaRisolto";
import ChattaDirettamente from "../components/TrovaIlTuoProfessionista/ChattaDirettamente";
import FeedBack from "../components/TrovaIlTuoProfessionista/FeedBack";
import SeiUnProfessionista from "../components/TrovaIlTuoProfessionista/SeiUnProfessionista";
import Login from "../components/General/Login/Login";
import SeiNuovo from "../components/TrovaIlTuoProfessionista/SeiNuovo";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/General/Footer";
import { AppContext } from "../context/Context";

const TrovaIlTuoProfessionista = () => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  if (!isMobile)
    return (
      <>
        <Header />
        <div style={{ width: "100%" }}>
          <div style={{ backgroundColor: "#F9F9F9", marginTop: "100px" }}>
            <div
              style={{
                margin: "auto",
                display: "flex",
                backgroundColor: "#ffffff",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                width: "80%",
              }}
            >
              <div style={{ marginTop: "50px", width: "100%" }}>
                <BoxSearch />
              </div>

              <div style={{ marginTop: "50px", width: "100%" }}>
                <HaiBisognoDiCure />
              </div>

              <div style={{ marginTop: "50px", width: "100%" }}>
                <ProblemaRisolto />
              </div>

              <div style={{ marginTop: "50px", width: "100%" }}>
                <ChattaDirettamente />
              </div>

              <div style={{ marginTop: "50px", width: "100%" }}>
                <SeiUnProfessionista />
              </div>

              <div
                style={{
                  width: "100%",
                  marginTop: "100px",
                  border: "1px solid #39B1D9",
                  display: "inline-block",
                }}
              />
              <div style={{ marginTop: "50px", width: "100%" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Login />
                  <SeiNuovo />
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  else
    return (
      <>
        <div style={{ width: "100%" }}>
          <Header />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              marginTop: "100px",
            }}
          >
            <BoxSearch />

            <Lavagna />

            <HaiBisognoDiCure />

            <ProblemaRisolto />

            <ChattaDirettamente />

            <FeedBack />

            <SeiUnProfessionista />

            <Login />

            <SeiNuovo />
          </div>
          <Footer />
        </div>
      </>
    );
};

export default TrovaIlTuoProfessionista;
