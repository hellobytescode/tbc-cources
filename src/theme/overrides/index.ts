import { Theme } from "@mui/material/styles";

import Button from "./Button";
import Card from "./Card";
import Tabs from "./Tabs";
import CssBaseline from "./cssBaseline";

export default function ComponentOverrides(theme: Theme) {
  return Object.assign(
    Button(theme),
    Card(theme),
    Tabs(theme),
    CssBaseline(theme)
  );
}
