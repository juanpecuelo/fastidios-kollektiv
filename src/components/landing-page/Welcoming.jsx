import { Box, Container, Fade, Typography, useTheme } from "@mui/material";
import { FASTIDIOS_NAME } from "../../constants";
import { NextEvent } from "./NextEvent";

export const Welcoming = ({ mousePosition }) => {
  const theme = useTheme();

  return (
    <Box
      maxWidth="lg"
      sx={{
        position: "relative",
        textAlign: "center",
        transform: `translate(${mousePosition.x * 10}px, ${
          mousePosition.y * 10
        }px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <Fade in timeout={1000}>
        <Typography
          variant="h5"
          textTransform={"uppercase"}
          sx={{
            backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main},${theme.palette.secondary.main} )`,
            WebkitBackgroundClip: "text",
            fontWeight: "bold",
            letterSpacing: "0.3em",
            WebkitTextFillColor: "transparent",
            display: "block",
            mb: 2,
          }}
        >
          {FASTIDIOS_NAME}
        </Typography>
      </Fade>

      <Fade in timeout={1500}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "3rem", md: "5rem", lg: "5rem" },
            lineHeight: 1,
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            "& span": {
              display: "inline-block",
              animation: "glitch 2s infinite",
              "&:nth-of-type(2)": {
                animationDelay: "0.1s",
              },
              "&:nth-of-type(3)": {
                animationDelay: "0.2s",
              },
            },
            "@keyframes glitch": {
              "0%, 100%": { transform: "translateX(0)" },
              "20%": { transform: "translateX(-2px)" },
              "40%": { transform: "translateX(2px)" },
              "60%": { transform: "translateX(-1px)" },
              "80%": { transform: "translateX(1px)" },
            },
          }}
        >
          <span>UNDERGROUND</span> <br />
          <span>TECHNO</span>
        </Typography>
      </Fade>

      <Fade in timeout={2000}>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.8,
            mb: 4,
            fontWeight: 300,
            letterSpacing: "0.1em",
          }}
        >
          Art and underground rave collective
        </Typography>
      </Fade>
    </Box>
  );
};
