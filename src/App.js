import "./App.css";
import { useContext } from "react";
import { GlobalContext } from "./utils/GlobalContext";
import { Box, IconButton, Typography } from "@mui/material";
import { useIntl } from "react-intl";

function App() {
  const { locale, changeLocale } = useContext(GlobalContext);
  const { $t: t } = useIntl();


  return (
    <Box mx={2}>
      <IconButton onClick={() => changeLocale(locale === "tr" ? "en" : "tr")}>
        {locale === "en" ? "EN" : "TR"}
      </IconButton>
      <Typography>{t({ id: "welcome" })}</Typography>
      <Typography>{t({ id: "hello" })}</Typography>
    </Box>
  );
}

export default App;
