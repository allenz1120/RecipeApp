import NavBar from "./components/NavBar/NavBar";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
