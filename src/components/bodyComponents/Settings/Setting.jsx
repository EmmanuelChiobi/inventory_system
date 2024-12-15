import React, { Component } from "react";

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "john_doe",
      email: "john.doe@example.com",
      password: "",
      role: "Admin",
      notifications: true,
      isEditing: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSave = () => {
    console.log("Settings saved:", this.state);
    this.setState({ isEditing: false });
  };

  handleCancel = () => {
    this.setState({
      username: "john_doe",
      email: "john.doe@example.com",
      password: "",
      role: "Admin",
      notifications: true,
      isEditing: false,
    });
  };

  toggleEdit = () => {
    this.setState((prevState) => ({
      isEditing: !prevState.isEditing,
    }));
  };

  render() {
    const {
      username,
      email,
      password,
      role,
      notifications,
      isEditing,
    } = this.state;

    return (
      <div className="settings-container" style={styles.container}>
        <h2 style={styles.header}>Settings</h2>

        <div style={styles.settingsCard}>
          <h3 style={styles.subHeader}>Account Settings</h3>

          <div style={styles.formGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              disabled={!isEditing}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Role</label>
            <input
              type="text"
              name="role"
              value={role}
              disabled
              style={styles.input}
            />
          </div>

          <h3 style={styles.subHeader}>Preferences</h3>

          <div style={styles.formGroup}>
            <label style={styles.label}>Enable Notifications</label>
            <input
              type="checkbox"
              name="notifications"
              checked={notifications}
              onChange={this.handleInputChange}
              disabled={!isEditing}
              style={styles.checkbox}
            />
          </div>

          <div style={styles.buttonGroup}>
            {isEditing ? (
              <>
                <button onClick={this.handleSave} style={styles.saveButton}>
                  Save
                </button>
                <button onClick={this.handleCancel} style={styles.cancelButton}>
                  Cancel
                </button>
              </>
            ) : (
              <button onClick={this.toggleEdit} style={styles.editButton}>
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

// Simple inline styles for the settings page
const styles = {
  container: {
    width: "70%",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#333",
  },
  settingsCard: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
    marginTop: "20px",
  },
  subHeader: {
    color: "#333",
    marginTop: "20px",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
  checkbox: {
    width: "20px",
    height: "20px",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
    marginTop: "20px",
  },
  saveButton: {
    backgroundColor: "#28a745",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  cancelButton: {
    backgroundColor: "#dc3545",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  editButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Settings;
