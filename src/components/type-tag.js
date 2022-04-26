import { Box, Typography } from "@mui/material";

const TypeTag = ({ type, sx }) => (
  <Typography
    variant="subtitle2"
    sx={{
      fontSize: "0.9rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      bgcolor: type + ".type",
      boxShadow: "1px 1px 3px black",
      borderRadius: "100px",
      width: "100px",
      alignSelf: "center",
      ...sx,
    }}
    color="white.main"
  >
    {type}
  </Typography>
);

export default TypeTag;
