import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  IconButton,
  useTheme,
  useMediaQuery,
  alpha,
  Zoom,
  Stack,
} from "@mui/material";
import { VolumeUp, VolumeOff, KeyboardArrowDown } from "@mui/icons-material";

import video from "../../assets/video.mp4";

import { Welcoming } from "./Welcoming";
import { NextEvent } from "./NextEvent";

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [muted, setMuted] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

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
    <Box
      id="#landing"
      sx={{ bgcolor: "background.default", minHeight: "100vh" }}
    >
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

        <IconButton
          onClick={() => setMuted(!muted)}
          sx={{
            position: "absolute",
            top: { xs: 5, md: 20 },
            right: { xs: 5, md: 20 },
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

        <Box
          sx={{
            width: "100%",
            height: "100vh",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{
              zIndex: 2,
              alignItems: "center",
              flex: 1,
              width: "100%",
              justifyContent: { xs: "center", md: "space-evenly" },
            }}
          >
            {
              //TODO estaria interesante que cuando se desmutee el sonido, las letras del welcoming se moviesen mas rápido
            }
            <Welcoming
              mousePosition={mousePosition ?? null}
              isMobile={isMobile}
            />
            <NextEvent />
          </Stack>
          <Zoom in timeout={2500}>
            <IconButton
              sx={{
                animation: "bounce 2s infinite",
                "@keyframes bounce": {
                  "0%, 100%": { transform: "translateY(0)" },
                  "50%": { transform: "translateY(10px)" },
                },
                marginBottom: "2px",
              }}
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <KeyboardArrowDown
                sx={{ fontSize: 40, color: theme.palette.primary.main }}
              />
            </IconButton>
          </Zoom>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
