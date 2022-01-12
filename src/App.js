import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { PageMain } from "./RootPages/PageMain";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <PageMain></PageMain>
      </div>
    </BrowserRouter>
  );
};

export default App;
