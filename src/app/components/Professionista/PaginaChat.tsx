import React, { useEffect, useRef, useState } from "react";
import { Box, TextField } from "@mui/material";
import ModalOfferta from "../../components/General/ModalOfferta";
import { useLocation } from "react-router-dom";
import axios from "axios";
import HeaderChat from "./HeaderChat";

import mappeImmagine from "../../media/location.gif";

interface IChat {
  sender: string;
  message: string;
  contatti_id: string;
  _id: string;
}
const PaginaChat = () => {
  const [token, setToken] = useState("");
  const [messaggio, setMessaggio] = useState("");
  const [chat, setChat] = useState<IChat[]>();
  const location = useLocation();
  const [lastmessage, setLastmessage] = useState(0);
  const conversazione = location.state as any;
  const id = conversazione.contatto._id;
  const [off, setOff] = useState(false);
  const [apri, setApri] = useState(false);
  const idinvio = conversazione.contatto.id_professionista;

  const myRef = React.createRef();

  const takeToken = async () => {
    const tokenTest = await localStorage.getItem("tokenaccess");
    if (!!tokenTest) setToken(tokenTest);
  };

  const recuperaChat = async () => {
    const cont = {
      contatti_id: id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .post("https://fastcuradev.herokuapp.com/chat/get-message", cont, config)

      .then((x) => setChat(x.data));
  };

  const creaOfferta = () => {
    setOff(!off);
    setApri(!apri);
  };

  const inviaOfferta = () => {
    const off = {
      message: messaggio,
      contatti_id: id,
    };
  };
  const sendMessage = async () => {
    const mess = {
      message: messaggio,
      contatti_id: id,
    };
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios.post(
      "https://fastcuradev.herokuapp.com/chat/send-message",
      mess,
      config
    );

    setMessaggio("");

    recuperaChat();
  };

  useEffect(() => {
    aggiorna();
  }, [token]);

  function aggiorna() {
    recuperaChat();

    setTimeout(aggiorna, 1000);
  }
  const isMine = (idsender: string) => {
    if (idsender == idinvio) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    takeToken();
    recuperaChat();
  }, [token]);

  const vaiallafine = () => {
    var objDiv = document.getElementById("boxchat");
    if (objDiv !== null) objDiv.scrollTop = objDiv.scrollHeight + 1000;
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <HeaderChat />
        <Box
          id="boxchat"
          style={{
            height: "500px",
            overflowY: "scroll",
            marginTop: 30,
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {!!chat &&
            chat.map((x, k) => {
              if (k == chat.length - 1) {
                if (k !== lastmessage) {
                  vaiallafine();
                  setLastmessage(k);
                }
              }
              if (x.message.substr(0, 3) == "tel") {
                return (
                  <>
                    <div
                      style={{
                        marginTop: "3px",
                        display: "flex",
                        alignContent: "center",
                        width: "max-content",
                        maxWidth: "200px",
                        borderRadius: "30px",
                        padding: "5px",

                        backgroundColor: isMine(x.sender)
                          ? "rgb(255, 54, 23)"
                          : "rgb(255, 54, 23)",
                        alignSelf: isMine(x.sender) ? "flex-end" : "flex-start",

                        textAlign: isMine(x.sender) ? "left" : "right",
                      }}
                    >
                      <a
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          flexDirection: "row",
                          alignContent: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        href={x.message.substr(3)}
                      >
                        <p
                          style={{
                            color: "white",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            fontSize: "18px",
                            display: "flex",
                            alignContent: "center",
                          }}
                        >
                          Whatsapp
                        </p>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAABmJLR0QA/wD/AP+gvaeTAAAJVElEQVRYhc2Ye3BU1R3Hv+fevffuZh/ZbN6bzWNjEkJ4xVDyMFRaEcVSK6i1Q7W26mBHLdRaZAb7R/ePThsqLSPWcToVGTt1tFirIkUoIIgJBALBCIU8SbLZEPJcdrOve+/uPf0j5eRJiAnO9Lf/nN9vf+d3P/ec+/udB/B/LmS2Hbdu/3OhpulWGQ3CPZpGiqJaNFWLaRKllON1fITn+CGOJ02yrB7RaPRw1S83nAEh9GsF3Lhzp2RSTU+Kgu4FjhD7bTmZxJmVYUiyWRFvMUEUBXAcB0VW4A8EMej1ocvTI7e0dynhiBLSaOz1aCS8s2rrs95bC0gp2bp99090AvcHR3qqUPGNxaZsRzoImfn79fYNovbchVBTazsoJdsEf1yVy/WIMmfALdt22Q0G3QfxJlPRd++505SWkjRjqKnE5x/GgU9PBLt6egfkmHb/theeOD9rwK0v76rgdfwnlcuWxN2xbIkwdsQ0qqHb14XmwUZ4fG74Il5E1Ag4jodZNMMomWA3O5CXOA+O+ExwhBsX+3xjKz1wtCYcU2JP/PbFp/Z8ZcAt2/+ySq8TP3hwzV3G3GwHs6uairOeUzjtOYGgEpzu/ZjEiUaUOypR4iiFwAnM3jfoxdvv/yukqurm3/ziyddnDLhl2xulkiR8un7tvUaHPZXZG/sv4kjrAfhl34zAJopFsmBl/n0oTCpiNp9/GG+++1FIDitTjuQkwM0vv54SJxgurb3vLlueMxMAQEFR667BZ5cPg+IrV4oJDyQoz6rECufdLMn6Br14a8/ekBKj5RO/SW5iAJNkfGdp8QITg6MUey++j2OXD80ZDhh52ZPuauy99D4oHYmXkpiA1d+uNEg897HLtUe8IeDW7W+slSSp9M7yEuZ0vONTXOybNtFmJRf7zqO68yjTFxXmEUdaSpJqCWyZEtDlcnGCKOz8zsrlJp4bMTf2X8TJzs/HBeYJj0WpC1BiL4ZBMMwJsqbjOJoGLjF99cpKIyFkq2vHbuskwIgx8wGr2Wx1ZtkBAFEtiiOtB8ZNK094PFHyI6xf/AgeXrAOq/NXzQmQguJQ835EYyoAwGoxoyA3h0SBjZMA9aL4fPnSRebrep3n5KRsvSO7HLk2J9OL0xfPeRSHFT/Odp9melnJQgNHuGfHAbp27LaqMbVs3m05AEaKcJ3n5KRgyzKWjtMFTsBS++1zAgSAWk8NNKoBANJTk6DXC8aXfv9mCQMMR6Mr7KnJEUHQAQA8PvekIswTHjZDwqTg5ZnLQGa/KQIAhJQgun1dTM93ZomEw90MUOD4iuzMDDa9zYONk4Jo0BCjsUl2g84AnuPnBAgALUNNrJ2ZkS6JemEUUCeKS5MSrex7HPs214VSit5A33gbKD5u2o+oFp0zYI/fw9qJCfGARgsYIAG1W4xxzOFaZOrt2rkrDeP0xv5mfNHz5ZzhACAgB1jbYjJBjcWSGSAoNYri6CIuRyNTBjnTXY+h8BDTnQnZsEiWWwI4rAyztigKiGmaxAApJTGqjda7G330qqbio0v7WG3U6/R4eOG6W/IN0v9lMQBolIIAGgMkHHxhWWYO+mlqW8tgG6o7TzA9z5aLh4rWzjmT9To9ayuKAp7jIwwQFFcCwRBzsOonl5OxcrDlMJoGmplenL4YP1j0MER+3DoPgRfw49sfxfcXrkOKMXnamAkGG2v7/AHodPxVBhhRlOorVwfY+SDNbJ82mEY1vHv+H+i85ma2xWkLsbH8GRQmzwP53+/BogcwL6kAt6cX4+cVz+GxJeuRYZk6dkZ8Fmv3D3pBgf8wQEJonbu7J3zd4TZb/rSAACBHZbxZ/1c09o+OZGKcDY8X/xAbK57BY8XrsSRtEfuPEIKilEI8W/Y0bGNG67oUJBWy9mV3dygiKwcZ4LAQqh665hOuT3N2ghNxovGmkGpMxd8a3sEpT904e5opFfOT592wX2RClTCJI+cXYCRB2js9iGnRQwzw1U2bZB3P7b/U0kGBkWVtqb3spoAjATV8dGkf3jr3NgZDgzf1b/d2IqSGxtnKMivZ7rrD3Q0QdL685adtDBAAwkr0ldq6hpCmjaT7MkcZ4oQ4zFSaBpqx48Sf8N6Ff6Ld2zHl7rvd24G/f/neOFu83oqSjFKmnzjTEJAVdcd1nRWwmn/vdd+5+oG1ZpPJnppsIzpOB1EnoW2wGTMVCoqrgV7UX/kC53oa0BfoQ1+wD5eHOnD08mc43HYUSmz0rE5AsGb+OiQbUwAA3T19qD1z3i/4jY8fO/ZeDAB0Yx8QlpVdTa3tRYvm5xkBwCpZMVvxhr2o6z47rc/ynBUoSBxJDo1S7Dt0PKBEo89XjblxGHcmMUjiSme2g2XH5Wttswa8mSxIXYzKnG8xvbq2Xg2GQg1Vm596e6zfKCClJKZpq3KzM5ipfbD1loMREFRkLcf9hQ+y1ael3U1PnbsQUDTloYn+bIpf2r5rgWSM0yXEjyz+ftmPgVA/AMAsWpCdkIt4QzzOdp9GRA1PjDMjsUhWrCq4j00rALi7r+LDT46F1Khyb9Xmp3tvCAhC7s3LyWRJE1aCuCd/DZwJubDFjV4YlWZU4Ez3aZy9cgqhGV59mEQTyjIrUZJRCh03+simtg669+DxkKoq36t68em6qfoyb70kPZSXm8l2CanmdKSa0yd10AsGLM9ZgYrs5XB729E61ILeQA+84SE2spJOjwSDDY74LBQkFsJucYy7qovGYjhWUyefu9A8rEaV1VUvbrhhNukAwOXarZdVpSQ7YzIQAASCIXR6egBCMD/fCY4Q8ISH05YHpy3vhiM3lbS2d+GTIzVBWVGroyE8WvXShmmruw4AQqboN9MSEiOSJEoAIMsK3Feuoq3DI7d1eJRgMMQLgq6GUpp05FhtQUXpkrj5+U5iMs6skCuKisbWDtSe/XLYHwgOqLLys99t2bB/Jn11ACDyujXWeJP5aHVdtKXdHfT6/HpREL5QZOVDNYbDceGu+l+7XBowcmf4eW395qM1dasTrBY1O8NuSE9NFM0mI/SSCEIIFDWK4UAA/UM+rb2za7i3f0gv8EJ1WJFf2bb5qX1f5a6aAMCv/ri7QRQEPqqqH6ux6MGgFD756qZN8nQdXa49YsToW86BLJMkfQU4OCjVrASEAxAE0CUraj2NxU5IRuW467nnAtPFm1Zcr71mmnXnr1n+C7twwaNbKQIUAAAAAElFTkSuQmCC" />
                      </a>
                    </div>
                  </>
                );
              } else if (x.message.substr(0, 4) == "link") {
                return (
                  <>
                    <div
                      style={{
                        marginTop: "3px",
                        display: "flex",
                        alignContent: "center",
                        width: "max-content",
                        maxWidth: "200px",
                        borderRadius: "30px",
                        padding: "5px",

                        backgroundColor: isMine(x.sender)
                          ? "rgb(255, 54, 23)"
                          : "rgb(255, 54, 23)",
                        alignSelf: isMine(x.sender) ? "flex-end" : "flex-start",

                        textAlign: isMine(x.sender) ? "left" : "right",
                      }}
                    >
                      <a
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          flexDirection: "row",
                          alignContent: "center",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        href={x.message.substr(4)}
                      >
                        <p
                          style={{
                            color: "white",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            fontSize: "18px",
                            display: "flex",
                            alignContent: "center",
                          }}
                        >
                          Qui la posizione
                        </p>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABmJLR0QA/wD/AP+gvaeTAAACtElEQVRYhe2WS0hUcRTGv9tDLB9J9DKyx6KGMpMyKJDatCooaOvarFUREe3bVEulJ0WRRruCsggiiB4bCWknmFCWi9JNakpYTb8W9xsZ5c69M860qgOHO/zPd77v/P/zv/cc6b8VaEAzcAXoA77Z+4DLQPPfFF4FPCTZHgArSy2eAgYt8BU4CzQBFfYmr40aMwhsKpV4DdBv4ufA8hjsCuCFsf1ATSkKuGjCXmBRHvhyoMc57cWKrwamgJ9AqoC8zcAv59YWU8Ax7+ReROwAMGTfHxG/79y2YgroMklrRGwo6+Z/ioi3OtYZpzEvoYbM8X3Iv+xpG5zFMacCAj8rImJtkobsUce8eBZHpC1IKCBztFskPZxRWRA8kbQ2Jrfez49xAkkn8MrPQwm4KMvkvIpFxRlQDUz6MtUnZ0znbXXOBFA15wJMdttkXQXk3HHOraLETZYCfgBpYEce+EZjf5SyH1zyjl4COe8NMA94bWxHScRNvAwYNvHxGNwJYz4DS0tWgMkPm3wSaIiIN2Rd2Lm8NTmFa4Ey/75pgXdktVrClj3g2HWvLQRWFSN8kLD/p4FzXisH3lioG5hv7/ZaD1Bu7AXCjvi8oBMBqpg5en0HHgOVjtdl3YerwDX//gKsyTqRp4TtOGOPyOebAFx3wihwCqiOwOwlfM0yNgXsicDVAKeBMeNu5FPAuMFNCbgW/z1poCUBu9OcY7NjUc1oWFKVpJSk3lykQRDcBUYl4cYUZ5lpajgBJwFHXe1vws/wtsSk3FyNQKe5AI7MxkT2auCkpPOSyrw0IOmZwhPpVzgDjNslqdpep3C3OyXtk7TR8SlJZ4IgyH9IBdYDHcAIc7cRoB1Yl0sndlpxIfMl7ZK0W9J2SRsUDiKVkpYYNiZpQuEA817SW0k9knqCIEjnvet/0v4A9/F83j3jPUUAAAAASUVORK5CYII=" />
                      </a>
                    </div>
                  </>
                );
              } else
                return (
                  <>
                    <div
                      style={{
                        marginTop: "3px",
                        display: "flex",
                        alignContent: "center",
                        width: "max-content",
                        maxWidth: "200px",
                        borderRadius: "20px",
                        paddingLeft: "3px",
                        paddingRight: "3px",
                        backgroundColor: isMine(x.sender)
                          ? "rgb(57, 177, 217)"
                          : "#D1E8F0",
                        alignSelf: isMine(x.sender) ? "flex-end" : "flex-start",
                      }}
                    >
                      <p
                        style={{
                          color: isMine(x.sender) ? "white" : "black",
                          paddingLeft: "8px",
                          paddingRight: "8px",
                        }}
                      >
                        {x.message}
                      </p>
                    </div>
                  </>
                );
            })}
        </Box>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            position: "fixed",
            height: "10%",
            bottom: "0%",
            left: "0%",
            right: "0%",
          }}
        >
          <TextField
            placeholder="Messaggio"
            sx={{
              height: "60px",
              width: "80%",
              border: "none",
              outline: "false",
              borderRadius: "30px",
              "& .MuiOutlinedInput-root": {
                borderColor: "#ffffff",
                borderRadius: "30px",
              },
            }}
            value={messaggio}
            onChange={(x: React.ChangeEvent<HTMLInputElement>) =>
              setMessaggio(x.target.value)
            }
            style={{ backgroundColor: "#ffffff" }}
          ></TextField>
          <button
            style={{
              marginLeft: "10px",
              width: "80px",
              height: "60px",
              backgroundColor: "#39B1D9",
              border: "none",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
            }}
            onClick={() => {
              sendMessage();
            }}
          >
            Invia
          </button>
          <button
            style={{
              marginLeft: "10px",
              width: "80px",
              height: "60px",
              backgroundColor: "#39B1D9",
              border: "none",
              borderRadius: "30px",
              fontSize: "12px",
              fontWeight: "bold",
              color: "white",
            }}
            onClick={() => {
              creaOfferta();
            }}
          >
            {!off ? "Crea Offerta" : "Invia Offerta"}
          </button>
        </div>
      </div>
      <ModalOfferta
        token={token}
        open={apri}
        chiudi={setApri}
        idconversazione={id}
        idcliente={conversazione.contatto.id_cliente}
        idprofessionista={conversazione.contatto.id_professionista}
      />{" "}
    </>
  );
};

export default PaginaChat;
