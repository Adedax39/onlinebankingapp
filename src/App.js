import "./App.css";
import FormFloatingBasicExample from "./LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import BasicExample from "./Components/Register";
import BasicExample2 from "./Components/UserNamePassword";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<FormFloatingBasicExample />} />
          <Route exact path="/register/1" element={<BasicExample />} />
          <Route exact path="/register/2" element={<BasicExample2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
