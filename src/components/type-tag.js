import { Box, Typography } from "@mui/material";

const TypeTag = ({ type }) => (
  <Box
    sx={{
      bgcolor: type + ".type",
      boxShadow: "1px 1px 3px black",
      borderRadius: "100px",
      width: "100px",
      alignSelf: "center",
      mx: 1,
    }}
  >
    <Typography
      variant="subtitle2"
      sx={{
        fontSize: "0.9rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {type}
    </Typography>
  </Box>
);

export default TypeTag;
