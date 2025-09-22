import { Box, Typography, useTheme } from "@mui/material";
import { CountdownTimer } from "./CountdownTimer";

export const NextEventCountdownTimer = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        mb: 2,
        alignItems: "center",
      }}
    >
      <Typography
        variant="h2"
        fontSize={{
          xs: "1.5rem",
          sm: "2.75rem",
          // md: "2.75rem",
        }}
        sx={{
          textAlign: "center",
          fontWeight: 800,
          textTransform: "uppercase",
          background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
        mr={{ xs: 2, md: 5 }}
      >
        Next
        <br />
        Event
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CountdownTimer />
      </Box>
    </Box>
  );
};
