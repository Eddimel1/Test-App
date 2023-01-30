import "./App.css";
import { ApiRouter } from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ApiRouter></ApiRouter>
      </div>
    </BrowserRouter>
  );
}

export default App;
