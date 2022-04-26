import { Typography } from "@mui/material";

const Title = ({ title, type, ...props }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        fontFamily: "Varela Round",
        fontWeight: "bold",
        color: type + ".type",
        height: "40px",
        width: 1,
        textAlign: "center",
      }}
    >
      {title}
    </Typography>
  );
};

export default Title;
