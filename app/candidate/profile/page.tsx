export default function Profile() {
  return (
    <div>
      <h1>👤 Candidate Profile</h1>

      <div style={{ marginTop: "20px" }}>

        <div style={{ marginBottom: "10px" }}>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" style={{ marginLeft: "10px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" style={{ marginLeft: "10px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Education:</label>
          <input type="text" placeholder="Your education" style={{ marginLeft: "10px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Experience (years):</label>
          <input type="number" placeholder="0" style={{ marginLeft: "10px" }} />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Skills:</label>
          <input type="text" placeholder="Java, MySQL, React..." style={{ marginLeft: "10px", width: "300px" }} />
        </div>

        <button style={{
          marginTop: "15px",
          padding: "8px 15px",
          background: "black",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}>
          Save Profile
        </button>

      </div>
    </div>
  );
}