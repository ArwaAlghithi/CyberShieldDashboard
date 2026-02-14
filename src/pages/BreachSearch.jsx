import { useState, useEffect } from "react";
import { checkBreach } from "../services/api";

function BreachSearch() {
  const [leaks, setLeaks] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (searchEmail.length < 3) {
      setLeaks([]);
      return;
    }

    setLoading(true);
    const timer = setTimeout(async () => {
      const data = await checkBreach(searchEmail);
      setLeaks(data);
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [searchEmail]);

  return (
    <div className="weather-container">
      <h2>Breach Explorer</h2>
      <div className="search-box">
        <input
          type="email"
          placeholder="Enter email or domain to check for leaks..."
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
        />
        {loading && <p className="loading-text">Scanning dark web... </p>}
      </div>

      {leaks.length > 0 && (
        <div className="leaks-results">
          {leaks.map((leak, index) => (
            <div
              key={index}
              className="stat-card"
              style={{ marginBottom: "15px" }}
            >
              <h3 style={{ color: "var(--text-accent)" }}>{leak.Title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-main)" }}>
                {leak.Description || "No additional details available."}
              </p>
              <div
                style={{ marginTop: "10px", fontSize: "0.8rem", opacity: 0.7 }}
              >
                Type:{" "}
                {Array.isArray(leak.DataClasses)
                  ? leak.DataClasses.join(", ")
                  : "General Leak"}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BreachSearch;
