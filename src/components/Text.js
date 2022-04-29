import { Typography } from '@mui/material/'
const Text = ({ sx = { color: "black" }, ...props }) => (
  <Typography sx={sx}>{props.children} </Typography>
)

export default Text