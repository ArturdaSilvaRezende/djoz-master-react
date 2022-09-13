import "./App.css";
import "./shared/style/modalAnimation.css";
import { HeaderProvider } from "./shared/context/globalContext";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <HeaderProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </HeaderProvider>
    </>
  );
}

export default App;
