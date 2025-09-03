import { createTheme } from "@mui/material/styles";

// Colores principales del Kollektiv
const colors = {
  lila: "#961AA9",
  verde: "#27B23B",
  amarillo: "#D8AE21",
  // Colores adicionales para completar la paleta
  negro: "#0A0A0A",
  blancoHueso: "#FAFAFA",
  grisOscuro: "#1C1C1C",
  grisMedio: "#2D2D2D",
  grisClaro: "#B8B8B8",
  error: "#FF3B3B",
  warning: "#FF8C00",
};

const theme = createTheme({
  palette: {
    mode: "dark", // Modo oscuro por defecto para eventos de techno
    primary: {
      main: colors.lila,
      light: "#B854C7",
      dark: "#6B1378",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: colors.verde,
      light: "#4FC55A",
      dark: "#1A7D28",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: colors.amarillo,
      light: "#E5C550",
      dark: "#A68418",
      contrastText: "#000000",
    },
    error: {
      main: colors.error,
      light: "#FF6B6B",
      dark: "#CC0000",
      contrastText: "#FFFFFF",
    },
    success: {
      main: colors.verde,
      light: "#4FC55A",
      dark: "#1A7D28",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#00B4D8",
      light: "#48CAE4",
      dark: "#0077B6",
      contrastText: "#FFFFFF",
    },
    background: {
      default: colors.negro,
      paper: colors.grisOscuro,
    },
    text: {
      primary: colors.blancoHueso,
      secondary: colors.grisClaro,
      disabled: "rgba(255, 255, 255, 0.5)",
    },
    divider: "rgba(255, 255, 255, 0.12)",
    action: {
      active: colors.lila,
      hover: "rgba(150, 26, 169, 0.08)",
      selected: "rgba(150, 26, 169, 0.16)",
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
    },
  },
  typography: {
    fontFamily: [
      "Inter",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "3.5rem",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      lineHeight: 1.2,
      "@media (max-width:600px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "2.75rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
      lineHeight: 1.3,
      "@media (max-width:600px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
      "@media (max-width:600px)": {
        fontSize: "1.75rem",
      },
    },
    h4: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.4,
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 500,
      lineHeight: 1.5,
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.5,
      "@media (max-width:600px)": {
        fontSize: "1.125rem",
      },
    },
    subtitle1: {
      fontSize: "1.125rem",
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    subtitle2: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: "0.00714em",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: "0.00938em",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.6,
      letterSpacing: "0.01071em",
    },
    button: {
      fontSize: "0.9375rem",
      fontWeight: 600,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
      letterSpacing: "0.03333em",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      letterSpacing: "0.08333em",
      lineHeight: 2.66,
      textTransform: "uppercase",
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(150, 26, 169, 0.05)",
    "0px 3px 6px rgba(150, 26, 169, 0.07)",
    "0px 3px 8px rgba(150, 26, 169, 0.08)",
    "0px 4px 10px rgba(150, 26, 169, 0.09)",
    "0px 5px 12px rgba(150, 26, 169, 0.10)",
    "0px 6px 14px rgba(150, 26, 169, 0.11)",
    "0px 7px 16px rgba(150, 26, 169, 0.12)",
    "0px 8px 18px rgba(150, 26, 169, 0.13)",
    "0px 9px 20px rgba(150, 26, 169, 0.14)",
    "0px 10px 22px rgba(150, 26, 169, 0.15)",
    "0px 11px 24px rgba(150, 26, 169, 0.16)",
    "0px 12px 26px rgba(150, 26, 169, 0.17)",
    "0px 13px 28px rgba(150, 26, 169, 0.18)",
    "0px 14px 30px rgba(150, 26, 169, 0.19)",
    "0px 15px 32px rgba(150, 26, 169, 0.20)",
    "0px 16px 34px rgba(150, 26, 169, 0.21)",
    "0px 17px 36px rgba(150, 26, 169, 0.22)",
    "0px 18px 38px rgba(150, 26, 169, 0.23)",
    "0px 19px 40px rgba(150, 26, 169, 0.24)",
    "0px 20px 42px rgba(150, 26, 169, 0.25)",
    "0px 21px 44px rgba(150, 26, 169, 0.26)",
    "0px 22px 46px rgba(150, 26, 169, 0.27)",
    "0px 23px 48px rgba(150, 26, 169, 0.28)",
    "0px 24px 50px rgba(150, 26, 169, 0.29)",
  ],
  transitions: {
    easing: {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 24px",
          fontSize: "0.9375rem",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0px 8px 20px rgba(150, 26, 169, 0.3)",
          },
        },
        containedPrimary: {
          background: `linear-gradient(135deg, ${colors.lila} 0%, #B854C7 100%)`,
          "&:hover": {
            background: `linear-gradient(135deg, #B854C7 0%, ${colors.lila} 100%)`,
          },
        },
        containedSecondary: {
          background: `linear-gradient(135deg, ${colors.verde} 0%, #4FC55A 100%)`,
          "&:hover": {
            background: `linear-gradient(135deg, #4FC55A 0%, ${colors.verde} 100%)`,
          },
        },
        outlined: {
          borderWidth: "2px",
          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: colors.grisOscuro,
          borderRadius: "16px",
          border: `1px solid rgba(150, 26, 169, 0.1)`,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: "0px 8px 32px rgba(150, 26, 169, 0.2)",
            borderColor: "rgba(150, 26, 169, 0.3)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          fontWeight: 500,
        },
        colorPrimary: {
          background: `linear-gradient(135deg, ${colors.lila} 0%, #B854C7 100%)`,
        },
        colorSecondary: {
          background: `linear-gradient(135deg, ${colors.verde} 0%, #4FC55A 100%)`,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(10, 10, 10, 0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(150, 26, 169, 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(150, 26, 169, 0.2)",
              borderWidth: "2px",
            },
            "&:hover fieldset": {
              borderColor: "rgba(150, 26, 169, 0.4)",
            },
            "&.Mui-focused fieldset": {
              borderColor: colors.lila,
              borderWidth: "2px",
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          backgroundColor: colors.grisOscuro,
        },
        elevation1: {
          boxShadow: "0px 2px 8px rgba(150, 26, 169, 0.08)",
        },
        elevation2: {
          boxShadow: "0px 4px 16px rgba(150, 26, 169, 0.12)",
        },
        elevation3: {
          boxShadow: "0px 6px 24px rgba(150, 26, 169, 0.16)",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.lila,
          textDecoration: "none",
          transition: "all 0.2s ease",
          "&:hover": {
            color: "#B854C7",
            textDecoration: "underline",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(150, 26, 169, 0.08)",
            transform: "scale(1.1)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "rgba(150, 26, 169, 0.1)",
        },
      },
    },
  },
});

export default theme;
