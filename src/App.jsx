import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./Layouts/DashBoard";

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/Login"
          element={<Login setIsLoggedin={setIsLoggedin} />}
        />
        <Route
          path="/dashboard"
          element={
            isLoggedin ? (
              <DashBoard setIsLoggedin={setIsLoggedin} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route path="/" element={<Navigate to="/Login" />} />
      </Routes>
    </Router>
  );
}

export default App;
