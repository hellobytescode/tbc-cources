// ------------------------------------

import {
  SettingsContextProps,
  SettingsValueProps,
} from "../common/types/theme";
import { ReactNode, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const defaultSettings: SettingsValueProps = {
  themeMode: "light",
  themeLayout: "horizontal",
  themeStretch: false,
};
const initialState: SettingsContextProps = {
  ...defaultSettings,
  onToggleMode: () => {},
  onResetSetting: () => {},
  onToggleLayout: () => {},
  onToggleStretch: () => {},
};

const SettingsContext = createContext(initialState);

type SettingsProviderProps = {
  children: ReactNode;
};

const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = useLocalStorage("settings", {
    themeMode: initialState.themeMode,
    themeLayout: initialState.themeLayout,
    themeStretch: initialState.themeStretch,
  });

  //   Toggle

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  // Layout

  const onToggleLayout = () => {
    setSettings({
      ...settings,
      themeLayout:
        settings.themeLayout === "vertical" ? "horizontal" : "vertical",
    });
  };

  // Stretch

  const onToggleStretch = () => {
    setSettings({
      ...settings,
      themeStretch: !settings.themeStretch,
    });
  };

  // Reset Settings

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeLayout: initialState.themeLayout,
      themeStretch: initialState.themeStretch,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        onToggleMode,
        onResetSetting,
        onToggleLayout,
        onToggleStretch,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
