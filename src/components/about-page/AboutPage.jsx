import {
  alpha,
  Box,
  Card,
  CardMedia,
  Container,
  Fade,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { mockPastEvents } from "../../mock";
import React from "react";

export const AboutPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 10, bgcolor: alpha(theme.palette.primary.main, 0.05) }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 800,
                mb: 3,
                textTransform: "uppercase",
              }}
            >
              The Kollektiv
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 3, lineHeight: 1.8, opacity: 0.9 }}
            >
              Born from Mannheim's underground scene, we create spaces where
              electronic music becomes a collective experience. Our events bring
              together local talents and international artists, united by the
              raw energy of techno.
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 4, lineHeight: 1.8, opacity: 0.9 }}
            >
              Each event is carefully curated to deliver an authentic
              underground experience - from the lineup to the location, every
              detail matters.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {mockPastEvents.slice(0, 4).map((event, index) => (
                <Grid item xs={6} key={event.id}>
                  <Fade in timeout={1000 + index * 200}>
                    <Card
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: 2,
                        transform:
                          index % 2 === 0 ? "rotate(-2deg)" : "rotate(2deg)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "rotate(0deg) scale(1.05)",
                          zIndex: 10,
                        },
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={event.image}
                        alt={event.name}
                        sx={{ height: 200 }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          bgcolor: "rgba(0,0,0,0.8)",
                          p: 1,
                          backdropFilter: "blur(10px)",
                        }}
                      >
                        <Typography
                          variant="caption"
                          sx={{ fontSize: "0.7rem", opacity: 0.7 }}
                        >
                          {event.date}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontWeight: 600 }}
                        >
                          {event.name}
                        </Typography>
                      </Box>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
