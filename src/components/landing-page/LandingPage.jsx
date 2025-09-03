import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Fade,
  useTheme,
  useMediaQuery,
  alpha,
  Zoom,
} from "@mui/material";
import {
  VolumeUp,
  VolumeOff,
  NearMe,
  KeyboardArrowDown,
} from "@mui/icons-material";

import video from "../../assets/video.mp4";
import { FASTIDIOS_NAME } from "../../constants";
import { NextEvent } from "./NextEvent";
import { Welcoming } from "./Welcoming";

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [muted, setMuted] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Próximo evento data (esto vendría de props o API)

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
        <Container
          sx={{
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Welcoming mousePosition={mousePosition} />
          <Zoom in timeout={2500}>
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
          </Zoom>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
