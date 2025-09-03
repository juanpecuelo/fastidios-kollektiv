import {
  alpha,
  Box,
  TextField,
  Typography,
  useTheme,
  Container,
  Button,
} from "@mui/material";

export const NewsletterPage = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 10, bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
      <Container maxWidth="sm">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 2,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          Join the Movement
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            mb: 4,
            opacity: 0.8,
          }}
        >
          Get exclusive access to pre-sales and underground events
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="your@email.com"
            sx={{
              "& .MuiOutlinedInput-root": {
                bgcolor: alpha(theme.palette.background.paper, 0.5),
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
                // transform: emailHovered ? "translateY(-2px)" : "translateY(0)",
              },
            }}
          />
          <Button
            variant="contained"
            size="large"
            sx={{
              px: 4,
              whiteSpace: "nowrap",
              fontWeight: 700,
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
