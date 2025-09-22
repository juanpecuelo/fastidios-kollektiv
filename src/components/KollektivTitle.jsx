import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const KollektivTitle = ({ variant = "h1", spacing = false, sx = {} }) => {
  const theme = useTheme();

  return (
    <Typography variant={variant} sx={sx}>
      <span
        style={{
          color: theme.palette.primary.main,
        }}
      >
        Los Fastidios
      </span>
      {spacing ? <br /> : " "}
      <span
        style={{
          backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.main} 10%, ${theme.palette.warning.main} 80%)`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Kollektiv
      </span>
    </Typography>
  );
};
