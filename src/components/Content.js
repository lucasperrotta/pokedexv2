import { Box } from "@mui/material"
const Content = ({ children }) => (
  <Box sx={{
    bgcolor: 'white',
    width: 1,
    flexGrow: 1,
    px: ["3.0em", "6.0em", "9.0em"],
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    py: 2,
  }}>
    {children}
  </Box>
)

export default Content