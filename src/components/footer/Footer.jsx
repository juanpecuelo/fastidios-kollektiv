import {
  alpha,
  Box,
  Container,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FASTIDIOS_NAME } from "../../constants";
import { Instagram } from "@mui/icons-material";

export const Footer = () => {
  const theme = useTheme();
  return (
    <Box sx={{ py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Stack direction={"column"} spacing={1}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 900,
                letterSpacing: "0.1em",
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              {FASTIDIOS_NAME}
            </Typography>

            <Stack direction="row" spacing={2}>
              <IconButton
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.2),
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Instagram />
              </IconButton>
            </Stack>
          </Stack>
          <Typography variant="body2" sx={{ opacity: 0.6 }}>
            © 2025 Kollektiv Mannheim. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
