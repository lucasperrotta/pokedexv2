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
      <TypeTag type="electric" />
      <TypeTag type="electric" />
      <TypeTag type="poison" />
    </Box>
  );
};

export default Types;
