import ToggleProvider from "./shared/context/ToggleContext";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import "./shared/style/modalAnimation.css";
import "./App.css";

function App() {
  return (
    <>
      <ToggleProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ToggleProvider>
    </>
  );
}

export default App;
