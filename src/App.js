import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { PageMain } from "./RootPages/PageMain";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PageMain></PageMain>
      </div>
    </BrowserRouter>
  );
}

export default App;
