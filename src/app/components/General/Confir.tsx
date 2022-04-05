import { Snackbar } from '@mui/material'
import React from 'react'

const Confir = (props:any) => {

const [open,setOpen] = React.useState(props.open)
return(
 <>

<Snackbar
  open={open}
  onClose={()=>{props.setOpen(false)}}
  autoHideDuration={5000}
  message={props.message}
/>
</>
)

}

export default Confir