import TypeTag from "./type-tag";
import { Box } from "@mui/material";
const Types = ({ ...props }) => {
  return (
    <Box
      sx={{
        width: 1,
        display: "flex",
        justifyContent: "center",
        height: "50px",
      }}
    >
      <TypeTag type="electric" sx={{mx:1}}/>
      <TypeTag type="electric" sx={{mx:1}}/>
      <TypeTag type="poison" sx={{mx:1}}/>
    </Box>
  );
};

export default Types;
