import { Box, Container, Fade, Typography, useTheme } from "@mui/material";
import { FASTIDIOS_NAME } from "../../constants";

export const Welcoming = ({ mousePosition, isMobile }) => {
  const theme = useTheme();

  //TODO este dropshadow hay que ponerlo mejor
  const dropShadow = `drop-shadow(${isMobile ? -7 : mousePosition.x * 10}px ${
    isMobile ? 5 : mousePosition.y * 15
  }px ${isMobile ? 2 : 3}px rgba(0,0,0))`;

  return (
    <Box
      maxWidth="lg"
      marginTop={{ xs: "20px" }}
      sx={{
        position: "relative",
        textAlign: "center",
        transform: `translate(${mousePosition.x * 10}px, ${
          mousePosition.y * 10
        }px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <Fade in timeout={1500}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "3rem", md: "3.5rem", lg: "5rem" },
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
          <span
            style={{
              color: `${theme.palette.primary.main}`,
              filter: dropShadow,
            }}
          >
            LOS FASTIDIOS
          </span>{" "}
          <br />
          <span
            style={{
              backgroundImage: `linear-gradient(to right, ${theme.palette.secondary.main} 10%, ${theme.palette.warning.main} 80%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: dropShadow,
            }}
          >
            KOLLEKTIV
          </span>
        </Typography>
      </Fade>

      <Fade in timeout={2000}>
        <Typography
          variant="h6"
          sx={{
            opacity: 0.8,
            mb: { xs: 2, md: 4 },
            fontWeight: 300,
            letterSpacing: "0.1em",
            fontSize: { xs: "1rem", sm: "1.25rem", lg: "1.5rem" },
          }}
        >
          Art and underground rave collective
        </Typography>
      </Fade>
    </Box>
  );
};
