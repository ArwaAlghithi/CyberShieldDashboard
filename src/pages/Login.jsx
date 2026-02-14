import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = email.toLowerCase().trim();
    if ((user === "admin" || user === "arwa") && password === "1234") {
      setIsLoggedin(true);
      navigate("/dashboard");
    } else {
      alert("Invalid Security Credentials");
    }
  };

  return (
    <div className="login-page-enhanced">
      <div className="login-card-glass">
        <span className="login-logo">🛡️</span>
        <h2>CyberShield Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Security ID</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Passcode</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Authorize Access 🔒
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
