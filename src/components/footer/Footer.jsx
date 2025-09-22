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
import { KollektivTitle } from "../KollektivTitle";

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
            <KollektivTitle
              variant="h6"
              sx={{
                fontWeight: 900,
                letterSpacing: "0.1em",
              }}
            />

            <Stack direction="row" spacing={2}>
              <IconButton
                sx={{
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  "&:hover": {
                    bgcolor: alpha(theme.palette.primary.main, 0.2),
                  },
                }}
              >
                <Instagram />
              </IconButton>
            </Stack>
          </Stack>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              opacity: 0.6,
            }}
          >
            <Typography variant="body2">Done by</Typography>
            <a
              style={{
                textDecoration: "none",
                color: theme.palette.warning.light,
                fontSize: "0.875rem",
              }}
              href="https://www.instagram.com/senecalover99?igsh=Znh5YmtrbmpsdGQy&utm_source=qr"
              target="_blank"
            >
              @senecalover99
            </a>
            <Typography variant="body2">for</Typography>
            <KollektivTitle
              variant="body2"
              spacing={false}
              sx={{
                fontWeight: "bolder",
                ml: 0.5,
                mr: 0.5,
              }}
            />
            <Typography variant="body2">with ❤️</Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};
