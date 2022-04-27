import { Box } from "@mui/material"
const Ball = ({ color }) => (
  <Box sx={{
    bgcolor: color,
    minWidth: '1px',
    minHeight: '1px',
    height: '25px',
    width: '25px',
    borderRadius: '100%',
    border: '3px solid white',
    mx: 0.5,
    alignSelf: 'start',
  }} />
)
export default Ball