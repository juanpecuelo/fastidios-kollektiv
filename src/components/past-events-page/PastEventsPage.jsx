import {
  Container,
  Typography,
  Grid,
  Zoom,
  Card,
  CardMedia,
  Box,
  alpha,
  useTheme,
} from "@mui/material";
import React from "react";

import { mockPastEvents } from "../../mock";

export const PastEventsPage = () => {
  const theme = useTheme();
  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          mb: 6,
          fontWeight: 800,
          textTransform: "uppercase",
        }}
      >
        Past Events
      </Typography>

      <Grid container spacing={3}>
        {mockPastEvents.map((event, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={event.id}>
            <Zoom in timeout={500 + index * 100}>
              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: 3,
                  cursor: "pointer",
                  "&:hover": {
                    "& .overlay": {
                      opacity: 1,
                    },
                    "& img": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={event.image}
                  alt={event.name}
                  sx={{
                    height: 300,
                    transition: "transform 0.5s ease",
                  }}
                />
                <Box
                  className="overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: alpha(theme.palette.primary.main, 0.9),
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                    {event.name}
                  </Typography>
                  <Typography variant="subtitle1">{event.date}</Typography>
                </Box>
              </Card>
            </Zoom>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
