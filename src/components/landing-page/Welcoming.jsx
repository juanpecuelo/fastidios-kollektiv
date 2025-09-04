import { Box, Container, Fade, Typography, useTheme } from "@mui/material";
import { FASTIDIOS_NAME } from "../../constants";

export const Welcoming = ({ mousePosition, isMobile }) => {
  const theme = useTheme();

  return (
    <Box
      maxWidth="lg"
      padding={{ xs: "10px" }}
      sx={{
        position: "relative",
        textAlign: "center",
        transform: `translate(${mousePosition.x * 10}px, ${
          mousePosition.y * 10
        }px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      {/* <Fade in timeout={1000}>
        <Typography
          variant="h5"
          textTransform={"uppercase"}
          sx={{
            backgroundImage: `linear-gradient(to right, ${theme.palette.primary.main} 30%,${theme.palette.secondary.main} 80% )`,
            WebkitBackgroundClip: "text",
            fontWeight: "900",
            letterSpacing: "0.3em",
            WebkitTextFillColor: "transparent",
            display: "block",
            mb: 2,
          }}
        >
          {FASTIDIOS_NAME}
        </Typography>
      </Fade> */}

      <Fade in timeout={1500}>
        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontSize: { xs: "2rem", md: "5rem", lg: "5rem" },
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
              filter: isMobile
                ? "none"
                : `drop-shadow(${mousePosition.x * 10}px ${
                    mousePosition.y * 15
                  }px 3px rgba(0,0,0))`,
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
              filter: isMobile
                ? "none"
                : `drop-shadow(${mousePosition.x * 10}px ${
                    mousePosition.y * 15
                  }px 3px rgba(0,0,0))`,
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
