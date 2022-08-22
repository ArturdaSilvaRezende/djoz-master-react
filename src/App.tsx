import "./App.css";
import { Main } from "./pages/main/main";
import { HeaderProvider } from "./shared/context/headerContext";

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
