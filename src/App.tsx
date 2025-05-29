import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { router } from "./routes";
import "./App.css";
import { AuthProvider } from "./AuthProvider";
import useMode from "./hooks/useMode";
// import { LocalizationProvider } from "@mui/x-date-pickers";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const queryClient = new QueryClient();

function App() {
  const { theme, mode } = useMode();

  // Force a re-render when mode changes
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}> */}
      <CssBaseline enableColorScheme />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </QueryClientProvider>
      {/* </LocalizationProvider> */}
    </ThemeProvider>
  );
}

export default App;
