import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#5D3AB7",
      light: "#E0D4FA",
      contrastText: "#EEF5FA",
    },
    secondary: {
      main: "#20C997",
      contrastText: "#EEF5FA",
    },
    neutral: {
      main: "#EEF5FA",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
  typography: {
    allVariants: {
      color: "#001858",
    },
  },
});

theme = responsiveFontSizes(theme);

theme.typography.body2 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
};

theme.typography.subtitle2 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "0.6rem",
  },
};

theme.typography.subtitle1 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.6rem",
  },
};
theme.typography.h6 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
};
theme.typography.h4 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.1rem",
  },
};
theme.typography.h1 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
};
theme.typography.h2 = {
  [theme.breakpoints.down("md")]: {
    fontSize: "2.2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
};

theme = createTheme(theme, {
  palette: {
    primary: {
      main: theme.palette.primary.main,
    },
    secondary: {
      main: theme.palette.secondary.main,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minWidth: "40px",
          color: theme.palette.neutral.light,
          [theme.breakpoints.down("md")]: {
            fontSize: "0.7rem",
          },
        },
        startIcon: {
          margin: "0",
          color: theme.palette.primary.main,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: theme.palette.primary.main,
          [theme.breakpoints.down("md")]: {
            fontSize: "0.7rem",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "rgba(203, 221, 234, 0.35 )",
          backdropFilter: "blur(20px)",
          boxShadow: "0px 0px 12px -4px rgb(203 221 234)",
          border: "1px solid rgba(203, 221, 234, 0.3)",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          [theme.breakpoints.down("md")]: {
            padding: "10px 7px",
          },
        },
        root: {
          [theme.breakpoints.down("md")]: {
            fontSize: "0.8rem",
          },
        },
        notchedOutline: {
          borderColor: theme.palette.primary.light,
        },
      },
    },
  },
});

export default theme;
