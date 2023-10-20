import { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import ThemeProvider from "./theme";
import { SettingsProvider } from "./context/SettingsContext";
import Router from "./routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <AuthProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
