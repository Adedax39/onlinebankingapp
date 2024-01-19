import "./App.css";
import FormFloatingBasicExample from "./LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BasicCard from "./Components/Register";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<FormFloatingBasicExample />} />
          <Route exact path="/register" element={<BasicCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
