import {
  alpha,
  Box,
  Button,
  Chip,
  Fade,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { NextEventCountdownTimer } from "./NextEventCountdownTimer";
import {
  AccessTime,
  CalendarMonth,
  ConfirmationNumber,
  LocationOn,
  NearMe,
} from "@mui/icons-material";

const nextEvent = {
  title: "Hueleteka 004",
  date: "14 DECEMBER 2024",
  time: "22:00 - 06:00",
  location: "Käthe-Kollwitz-Straße 2-4, Mannheim",
  artists: ["Artist #1", "Artist #2", "Artist #3"],
  ticketsLink: "#",
  price: "8€",
};
export const NextEvent = () => {
  const theme = useTheme();

  const handleOpenMaps = ({ location }) => {
    const url = `http://maps.apple.com/?q=${location}`;
    window.open(url, "_blank");
  };
  return (
    <Box sx={{ py: 2 }}>
      <Fade in timeout={1000}>
        <Box>
          <Grid spacing={4}>
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
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <CalendarMonth sx={{ color: theme.palette.primary.main }} />
                    <Typography variant="h6">{nextEvent.date}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <AccessTime sx={{ color: theme.palette.primary.main }} />
                    <Typography variant="h6">{nextEvent.time}</Typography>
                  </Box>
                  <Box
                    onClick={() =>
                      handleOpenMaps({ location: nextEvent.location })
                    }
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      cursor: "pointer",
                    }}
                  >
                    <LocationOn sx={{ color: theme.palette.primary.main }} />
                    <Typography variant="h6">{nextEvent.location}</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <ConfirmationNumber
                      sx={{ color: theme.palette.primary.main }}
                    />
                    <Typography variant="h6">{nextEvent.price}</Typography>
                  </Box>
                </Stack>

                <Box sx={{ mb: 4 }}>
                  <Typography variant="subtitle2" sx={{ mb: 2, opacity: 0.7 }}>
                    LINEUP
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
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
                    py: { xs: 1, sm: 2 },
                    px: { xs: 2, ms: 4 },
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
      </Fade>
    </Box>
  );
};
