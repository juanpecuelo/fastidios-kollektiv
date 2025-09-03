import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  IconButton,
  Chip,
  Fade,
  Slide,
  Stack,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";
import {
  LocationOn,
  CalendarMonth,
  AccessTime,
  ConfirmationNumber,
  VolumeUp,
  VolumeOff,
  NearMe,
} from "@mui/icons-material";

import video from "../../assets/video.mp4";
import { FASTIDIOS_NAME } from "../../constants";
import { NextEventCountdownTimer } from "./NextEventCountdownTimer";
import { AboutPage } from "../about-page/AboutPage";
import { PastEventsPage } from "../past-events-page/PastEventsPage";
import { NewsletterPage } from "./NewsletterPage";
import { Footer } from "../footer/Footer";

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [muted, setMuted] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Próximo evento data (esto vendría de props o API)
  const nextEvent = {
    title: "ACID DREAMS",
    date: "15 SEPTEMBER 2025",
    time: "23:00 - 06:00",
    location: "Disco Zwei, Mannheim",
    artists: ["KLAUDIA GAWLAS", "PAPPENHEIMER", "LOCAL RESISTANCE"],
    banner: "/api/placeholder/1200/600",
    ticketsLink: "#",
    price: "15€ - 25€",
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 2,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh" }}>
      {/* Hero Section with Video Background */}
      <Box
        ref={heroRef}
        sx={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Video Background */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(0,0,0,0.7)",
              zIndex: 1,
            },
          }}
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted={muted}
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={video} type="video/mp4" />
          </video>
        </Box>

        {/* Sound Toggle */}
        <IconButton
          onClick={() => setMuted(!muted)}
          sx={{
            position: "absolute",
            top: 20,
            right: 20,
            zIndex: 10,
            bgcolor: alpha(theme.palette.primary.main, 0.2),
            backdropFilter: "blur(10px)",
            "&:hover": {
              bgcolor: alpha(theme.palette.primary.main, 0.3),
            },
          }}
        >
          {muted ? <VolumeOff /> : <VolumeUp />}
        </IconButton>

        {/* Hero Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            zIndex: 2,
            alignItems: "center",
          }}
        >
          <Container
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
                <span>UNDERGROUND</span> <span>TECHNO</span>
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
          </Container>

          {/* Next Event Section */}
          <Container maxWidth="xl" sx={{ py: 10 }}>
            <Slide in direction="up" timeout={1000}>
              <Box>
                <Grid container spacing={4} alignItems="stretch">
                  <Grid xs={12} lg={7}>
                    <NextEventCountdownTimer />
                  </Grid>

                  <Grid xs={12} lg={5}>
                    <Box
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          fontWeight: 900,
                          mb: 3,
                          textTransform: "uppercase",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {nextEvent.title}
                      </Typography>

                      <Stack spacing={2} sx={{ mb: 4 }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <CalendarMonth
                            sx={{ color: theme.palette.primary.main }}
                          />
                          <Typography variant="h6">{nextEvent.date}</Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <AccessTime
                            sx={{ color: theme.palette.primary.main }}
                          />
                          <Typography variant="h6">{nextEvent.time}</Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <LocationOn
                            sx={{ color: theme.palette.primary.main }}
                          />
                          <Typography variant="h6">
                            {nextEvent.location}
                          </Typography>
                        </Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <ConfirmationNumber
                            sx={{ color: theme.palette.primary.main }}
                          />
                          <Typography variant="h6">
                            {nextEvent.price}
                          </Typography>
                        </Box>
                      </Stack>

                      <Box sx={{ mb: 4 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ mb: 2, opacity: 0.7 }}
                        >
                          LINEUP
                        </Typography>
                        <Stack
                          direction="row"
                          spacing={1}
                          flexWrap="wrap"
                          useFlexGap
                        >
                          {nextEvent.artists.map((artist, index) => (
                            <Chip
                              key={index}
                              label={artist}
                              sx={{
                                bgcolor: alpha(theme.palette.primary.main, 0.2),
                                color: theme.palette.primary.light,
                                fontWeight: 600,
                                fontSize: "0.9rem",
                                py: 2,
                                mb: 1,
                              }}
                            />
                          ))}
                        </Stack>
                      </Box>

                      <Button
                        variant="contained"
                        size="large"
                        endIcon={<NearMe />}
                        sx={{
                          py: 2,
                          px: 4,
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          borderRadius: 3,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                        }}
                      >
                        More Info
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Slide>
          </Container>
        </Box>

        {/* <Zoom in timeout={2500}>
          <IconButton
            sx={{
              animation: "bounce 2s infinite",
              "@keyframes bounce": {
                "0%, 100%": { transform: "translateY(0)" },
                "50%": { transform: "translateY(10px)" },
              },
            }}
          >
            <KeyboardArrowDown
              sx={{ fontSize: 40, color: theme.palette.primary.main }}
            />
          </IconButton>
        </Zoom> */}
      </Box>
    </Box>
  );
};

export default LandingPage;
