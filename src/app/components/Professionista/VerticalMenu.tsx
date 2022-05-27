import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const VerticalMenu = (props: any) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const isBig = useMediaQuery({ query: `(max-width: 1300px)` });
  const navigate = useNavigate();
  if (props.primo === true) {
    return (
      <Menu
        open={props.open}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          marginTop: "5rem",
          top: isMobile ? "-70%" : "-70%",
          left: isMobile ? "40%" : "65%",
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
          onClick={() => {
            localStorage.clear();
            console.log(localStorage.getItem("token"));
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
    );
  }
  return (
    <Menu
      open={props.open}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
      sx={{
        position: "absolute",
        top: isMobile ? "-16rem" : "-16rem",
        left: isMobile ? "15rem" : "80%",
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
        onClick={() => {
          localStorage.clear();
          console.log(localStorage.getItem("token"));
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
  );
};

export default VerticalMenu;
