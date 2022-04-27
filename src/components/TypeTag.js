import { Box } from "@mui/material"
const TypeTag = ({ type, children }) => (
  <Box sx={{
    bgcolor: type + '.type',
    boxShadow: "1px 1px 3px black",
    borderRadius: "100px",
  }}>
    {children}
  </Box >
)

export default TypeTag