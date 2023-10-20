export type ThemeMode = "light" | "dark";
export type ThemeLayout = "vertical" | "horizontal";

export type ThemeStretch = boolean;

export type ColorVariants = {
  name: string;
  lighter: string;
  light: string;
  main: string;
  dark: string;
  darker: string;
  contrastText: string;
};

export type SettingsValueProps = {
  themeMode: ThemeMode;
  themeLayout: ThemeLayout;
  themeStretch: ThemeStretch;
};

export type SettingsContextProps = {
  themeMode: ThemeMode;
  themeLayout: ThemeLayout;
  themeStretch: boolean;

  // Mode
  onToggleMode: VoidFunction;

  // Reset
  onResetSetting: VoidFunction;

  onToggleLayout: VoidFunction;

  onToggleStretch: VoidFunction;
};
