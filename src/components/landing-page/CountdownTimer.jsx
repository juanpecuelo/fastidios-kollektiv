import { useTheme } from "@emotion/react";
import { Box, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const theme = useTheme();

  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 34,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0)
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0)
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0)
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Box key={unit} sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {String(value).padStart(2, "0")}
          </Typography>
          <Typography
            variant="caption"
            sx={{ opacity: 0.7, textTransform: "uppercase" }}
          >
            {unit}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};
