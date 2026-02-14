import LeakCard from "../components/LeakCard";

function Overview() {
  return (
    <div className="dashboard-overview">
      <h2 className="page-title">Security Dashboard</h2>

      <div className="stats-grid">
        <LeakCard title="Protected Accounts" value="12" status="Secure" />
        <LeakCard title="Active Breaches Found" value="2" status="Critical" />
        <LeakCard title="Security Score" value="85%" status="Excellent ✦" />
      </div>

      <div className="recent-activity" style={{ marginTop: "40px" }}>
        <h3>Recent Global Threats</h3>
        <div className="table-container">
          <p className="empty-message">Connected to Live Threat Feed...</p>
        </div>
      </div>
    </div>
     
    
  );
  
}

export default Overview;
