import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@/shared/css/app.scss";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

function App() {
  const [count, setCount] = useState(0);

  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
