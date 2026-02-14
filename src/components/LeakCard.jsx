function LeakCard({ title, value, status }) {
  return (
    <div className="stat-card">
      <h3>{title}</h3>
      <p>{value}</p>
      <div
        style={{ marginTop: "10px", fontSize: "0.85rem", fontWeight: "bold" }}
      >
        Status:{" "}
        <span
          style={{
            color: status.includes("Secure")
              ? "var(--text-green)"
              : "var(--error-red)",
          }}
        >
          {status}
        </span>
      </div>
    </div>
  );
}

export default LeakCard;
