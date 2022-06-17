import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const VerticalMenu = (props: any) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const isBig = useMediaQuery({ query: `(max-width: 1300px)` });
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "absolute",
        top: "4rem",
        right: isMobile ? "1rem" : "0rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "white",
        padding: "1rem",
        width: "180px",
        borderRadius: "20px",
        border: "0.5px solid grey ",
        zIndex: "10000000",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width={"30px"}
          height={"30px"}
          src="https://img.icons8.com/material-outlined/24/000000/settings--v1.png"
        />
        <p style={{ marginLeft: "5px", color: "#999999", fontSize: "14px" }}>
          Impostazioni
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width={"30px"}
          height={"30px"}
          src="https://img.icons8.com/material-outlined/24/000000/customer-support.png"
        />
        <p style={{ marginLeft: "5px", color: "#999999", fontSize: "14px" }}>
          {" "}
          Assistenza
        </p>
      </div>
      <div
        onClick={async () => {
          await localStorage.clear();
          navigate("/");
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width={"30px"}
          height={"30px"}
          src="https://img.icons8.com/material-outlined/24/000000/exit.png"
        />{" "}
        <p style={{ marginLeft: "5px", color: "#999999", fontSize: "14px" }}>
          {" "}
          Logout
        </p>
      </div>
    </div>
  );
  /*
  return (
    <Menu
      open={props.open}
      style={{ position: "absolute", top: "0rem" }}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      sx={{
        position: "absolute",
        top: "0rem",
      }}
    >
      <MenuItem>
        <img src="https://img.icons8.com/material-outlined/24/000000/settings--v1.png" />
        <p style={{ marginLeft: "5px", color: "#999999", fontSize: "14px" }}>
          Impostazioni
        </p>
      </MenuItem>
      <MenuItem>
        <img src="https://img.icons8.com/material-outlined/24/000000/customer-support.png" />
        <p style={{ marginLeft: "5px", color: "#999999", fontSize: "14px" }}>
          {" "}
          Assistenza
        </p>
      </MenuItem>
      <MenuItem
        onClick={async () => {
          await localStorage.clear();
          navigate("/");
        }}
      >
        <img src="https://img.icons8.com/material-outlined/24/000000/exit.png" />{" "}
        <p style={{ marginLeft: "5px", color: "#999999", fontSize: "14px" }}>
          {" "}
          Logout
        </p>
      </MenuItem>
    </Menu>
  );*/
};

export default VerticalMenu;
