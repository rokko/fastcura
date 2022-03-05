import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const VerticalMenu = (props: any) => {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const navigate = useNavigate()
  return (
    <>
      <div className="provino">
        <Menu
        
          open={props.open}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            
            position: "absolute",
            top: isMobile ? "-41%" : "-38%",
            left: isMobile ? "50%" : "88%",
          }}
        >
          <MenuItem>
            <img src="https://img.icons8.com/material-outlined/24/000000/settings--v1.png" />
           <p style={{marginLeft:'5px', color:'#999999', fontSize:'14px'}} >Impostazioni</p>
          </MenuItem>
          <MenuItem>
            <img src="https://img.icons8.com/material-outlined/24/000000/customer-support.png" />
            <p style={{marginLeft:'5px', color:'#999999', fontSize:'14px'}} > Assistenza</p>
          </MenuItem>
          <MenuItem onClick={()=> navigate('/')}>
            <img src="https://img.icons8.com/material-outlined/24/000000/exit.png" />{" "}
            <p style={{marginLeft:'5px', color:'#999999', fontSize:'14px'}} > Logout</p>
          </MenuItem>
        </Menu>
      </div>
    </>
  );
};

export default VerticalMenu;
