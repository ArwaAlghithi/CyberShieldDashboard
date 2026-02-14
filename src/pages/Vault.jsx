import { useState } from "react";
import { initialVault } from "../data/mockData";
import VaultModal from "../components/VaultModal";

function Vault() {
  const [vault, setVault] = useState(initialVault);
  const [formData, setFormData] = useState({
    site: "",
    username: "",
    securityLevel: "High",
  });
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setVault(
        vault.map((item) =>
          item.id === editingId ? { ...item, ...formData } : item,
        ),
      );
    } else {
      setVault([
        ...vault,
        {
          id: Date.now(),
          ...formData,
          lastChecked: new Date().toISOString().split("T")[0],
        },
      ]);
    }
    setShowForm(false);
  };

  return (
    <div className="portfolio-page">
      <VaultModal
        showForm={showForm}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        closeForm={() => setShowForm(false)}
      />

      <div className="page-header">
        <h2>Security Vault </h2>
        <button
          className="btn-add"
          onClick={() => {
            setEditingId(null);
            setFormData({ site: "", username: "", securityLevel: "High" });
            setShowForm(true);
          }}
        >
          + Add Account
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Platform</th>
            <th>Username</th>
            <th>Security Level</th>
            <th>Last Check</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {vault.map((item) => (
            <tr key={item.id}>
              <td>
                <strong>{item.site}</strong>
              </td>
              <td>{item.username}</td>
              <td
                className="symbol"
                style={{
                  color:
                    item.securityLevel === "Low"
                      ? "var(--error-red)"
                      : "var(--text-green)",
                }}
              >
                {item.securityLevel}
              </td>
              <td>{item.lastChecked}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => {
                    setEditingId(item.id);
                    setFormData(item);
                    setShowForm(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() =>
                    setVault(vault.filter((v) => v.id !== item.id))
                  }
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Vault;
