import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const VerticalMenu = (props: any) => {
  return (
    <>
     <div className='provino'>
        <Menu
          open={props.open}
          MenuListProps={{
            "aria-labelledby": "basic-button",  
          }}
          sx={{
              position:'absolute',
              top:'-41%',
              left:'60%'
          }}
        >
          <MenuItem>Impostazioni</MenuItem>
          <MenuItem>Assistenza</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>

        </div>

    </>
  )
}

export default VerticalMenu;
