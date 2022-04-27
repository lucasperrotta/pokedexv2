import { Box } from "@mui/material"
const BlueBall = () => (
  <Box sx={{
    bgcolor: "blue.ball",
    minWidth: "1px",
    minHeight: "1px",
    maxWidth: "60px",
    maxHeight: "60px",
    height: "60px",
    width: "60px",
    borderRadius: '50%',
    border: '3px solid white',
  }}>
    <Box sx={{
      bgcolor: "white.main",
      minWidth: "1px",
      minHeight: "1px",
      maxWidth: "10px",
      maxHeight: "10px",
      height: "10px",
      width: "10px",
      borderRadius: '50%',
      mt: 1,
      mx: 1
    }} />
  </Box>
)

export default BlueBall