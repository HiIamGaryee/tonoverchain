import {
  createTheme,
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    light: PaletteColor;
    dark: PaletteColor;
  }

  interface PaletteOptions {
    light?: PaletteColorOptions;
    dark?: PaletteColorOptions;
  }
}

const albertFont = "Albert Sans, sans-serif";
const nunitoFont = "Nunito Sans, sans-serif";

// Function to create a theme based on the mode
const getTheme = (mode: any) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#ffffff" : "#000000",
        paper: mode === "light" ? "#f5f5f5" : "#121212",
      },
      primary: {
        main: "#E5007D",
        light: "#FF4FAD",
        dark: "#C0006A",
        contrastText: "#ffffff",
      },
      secondary: {
        main: mode === "light" ? "#f7f3f0" : "#676767",
        light: "#FFD700",
        dark: "#444",
        contrastText: "#ffffff",
      },
      light: { main: "#ffffff", light: "#F5F3EF", dark: "#e0e0e0" },
      dark: { main: "#000000", light: "#514c4b", dark: "#212121" },
      error: {
        main: "#f44336", // Red for errors
        light: "#e57373",
        dark: "#d32f2f",
      },
      warning: {
        main: "#A77F33", // Gold for warnings
        light: "#ffb74d",
        dark: "#f57c00",
      },
      info: {
        main: "#2196f3",
        light: "#64b5f6",
        dark: "#1976d2",
      },
      success: {
        main: "#4caf50", // Green for successes
        light: "#81c784",
        dark: "#388e3c",
      },
    },
    typography: {
      fontFamily: nunitoFont,
      h1: { fontFamily: albertFont },
      h2: { fontFamily: albertFont },
      h3: { fontFamily: albertFont },
      h4: { fontFamily: albertFont },
      h5: { fontFamily: albertFont },
      h6: { fontFamily: albertFont, fontSize: 16 },
      subtitle1: { fontFamily: albertFont },
      button: { fontFamily: nunitoFont },
    },
    components: {
      MuiPaper: {
        defaultProps: {
          // elevation: 2,
        },
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.default,
            padding: 20,
            "&.table-paper": {
              boxShadow: "none",
              borderRadius: 0,
            },
          }),
          rounded: {
            borderRadius: "20px",
          },
          outlined: {
            borderColor: "#bdbdbd",
          },
        },
      },

      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            border: "1px solid #444",
            borderRadius: "4px",
            background: "linear-gradient(45deg, #434343 0%, #000 100%)",
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            color: "#fff",
            border: "none",
            "&.Mui-selected": {
              backgroundColor: "#555",
              color: "#fff",
            },
            "&:hover": {
              backgroundColor: "#444",
            },
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
        styleOverrides: {
          contained: {
            background: "#E5007D",
            color: "#fff",
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "50px",
            "&:hover": {
              background: "#C0006A",
            },
            "&:focus": {
              background: "#0052FF",
            },
          },
          outlined: {
            background: "transparent",
            border: "1px solid #E5007D",
            color: "#E5007D",
            fontWeight: "bold",
            padding: "8px 32px",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              background: "transparent",
              border: "1px solid #C0006A",
              color: "#C0006A",
            },
            "&:focus": {
              background: "transparent",
              border: "1px solid #0052FF",
              color: "#0052FF",
            },
          },
          text: {
            background: "#F5F3EF",
            color: "#e2994f",
            border: "1px solid error.main",
            borderRadius: "4px",
            "&:hover": {
              background: "#F5F3EF",
            },
            "&:focus": {
              background: "#F5F3EF",
            },
          },
          root: {
            background: "#e2994f",
            color: "#F5F3EF",
            borderRadius: "50px",
            p: "10px",
            "&:hover": {
              background: "#c17d39",
            },
            "&.Mui-disabled": {
              color: "#666",
              background: "#333333",
            },
            "&.MuiButton-sizeSmall": {
              padding: "6px 28px",
              fontWeight: 900,
            },
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontWeight: 700,
          },
          secondary: {
            fontWeight: 700,
          },
        },
      },

      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: mode === "light" ? "#ffffff" : "#1E1E1E",
            padding: "24px",
            borderRadius: "16px",
            height: "100%",
          }),
        },
      },

      MuiMenu: {
        styleOverrides: {
          paper: {
            padding: 0,
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            padding: 0,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: "outlined",
          fullWidth: true,
        },
        styleOverrides: {
          root: {
            padding: 0,
            borderRadius: "20px",
            backgroundColor: "#fff",
            "&.white-input": {
              backgroundColor: "#fff",
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#fff",
              },
            },
            // "& .MuiFormHelperText-root": {
            //   display: "none",
            // },

            "&.Mui-error .MuiFormHelperText-root": {
              display: "block",
              margin: 0,
              fontSize: "0.75rem",
              color: "#f44336",
              backgroundColor: "transparent",
            },
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
              backgroundColor: "#fff",
              border: "1px solid divider",
              "& fieldset": {
                borderColor: "none",
              },
              "&:hover fieldset": {
                borderColor: "none",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#E5007D",
              },
              "&.Mui-error fieldset": {
                borderColor: "#f44336",
              },
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            backgroundColor: "#F5F5F5",
            borderRadius: "12px",
            "&:before, &:after": {
              display: "none",
            },
            "&.Mui-focused:before": {
              display: "none",
            },
          },
          input: {
            padding: "16px",
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            marginTop: 0,
            paddingBottom: 0,
            marginRight: 8,
            alignSelf: "center",
            "&.MuiInputAdornment-positionStart:not(.MuiInputAdornment-hiddenLabel)":
              {
                paddingTop: 0,
                marginTop: "0 !important",
              },
          },
        },
      },

      MuiTypography: {
        styleOverrides: {
          root: {
            color: "#000000", // default for all variants
          },
          caption: ({ theme }) => ({
            color: theme.palette.grey[600],
            borderColor: theme.palette.divider,
          }),
        },
      },
    },
  });

export default getTheme;
