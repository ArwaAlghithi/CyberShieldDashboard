function VaultModal({
  showForm,
  formData,
  setFormData,
  handleSubmit,
  closeForm,
}) {
  if (!showForm) return null;

  return (
    <div className="model-overlay">
      <div className="model">
        <h3>{formData.id ? "Edit Account Security" : "Protect New Account"}</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Platform Name</label>
            <input
              type="text"
              name="site"
              value={formData.site}
              onChange={(e) =>
                setFormData({ ...formData, site: e.target.value })
              }
              placeholder="e.g. LinkedIn, Gmail..."
              required
            />
          </div>
          <div className="form-group">
            <label>Username / Email</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              placeholder="Your login identifier"
              required
            />
          </div>
          <div className="form-group">
            <label>Security Level</label>
            <select
              value={formData.securityLevel}
              onChange={(e) =>
                setFormData({ ...formData, securityLevel: e.target.value })
              }
            >
              <option value="High">High (2FA Enabled)</option>
              <option value="Medium">Medium (Strong Password)</option>
              <option value="Low">Low (Needs Update)</option>
            </select>
          </div>
          <div className="form modal-actions">
            <button type="submit" className="login-btn">
              Save to Vault
            </button>
            <button type="button" className="btn-cancel" onClick={closeForm}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default VaultModal;
