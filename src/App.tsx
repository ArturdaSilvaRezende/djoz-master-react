import "./App.css";
import "./shared/style/modalAnimation.css";
import { Main } from "./pages/main/main";
import { HeaderProvider } from "./shared/context/globalContext";

function App() {
  return (
    <>
      <HeaderProvider>
        <Main />
      </HeaderProvider>
    </>
  );
}

export default App;
