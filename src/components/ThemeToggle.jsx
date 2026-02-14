import { useState, useEffect } from "react";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  }, [isDark]);

  return (
    <button className="theme-toggle-btn" onClick={() => setIsDark(!isDark)}>
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
