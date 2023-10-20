import { ReactNode, useEffect, useMemo } from "react";
import {
  createTheme,
  ThemeOptions,
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import shadows, { customShadows } from "./shadows";
import useSettings from "../hooks/useSettings";
import componentOverrides from "./overrides";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { themeMode } = useSettings();
  const isLight = themeMode === "light";

  console.log("log: ", isLight);

  useEffect(() => {
    console.log("log: t", themeMode);
  }, [themeMode]);

  //TODO:   update border radius accordingly
  //NOTE: dark mode is completely disabled

  const themeOptions: ThemeOptions = useMemo(
    () => ({
      palette: palette.light,
      typography,
      breakpoints,
      shape: { borderRadius: 0 },
      shadows: shadows.light,
      customShadows: customShadows.light,
    }),
    [isLight]
  );

  const theme = createTheme(themeOptions);

  // @ts-ignore
  theme.components = componentOverrides(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
