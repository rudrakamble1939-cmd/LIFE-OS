import { useState } from "react";
import "../styles/Dashboard.css";

function ReceiptScanner() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const scanReceipt = async () => {
    if (!image) {
      alert("Please select a receipt image.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await fetch("http://localhost:5000/scan-receipt", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
      } else {
        setResult(data.result);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <div className="dashboard-content">

      <h1>📄 Receipt Scanner</h1>

      <div className="dashboard-form">

        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button
          className="auth-btn"
          onClick={scanReceipt}
        >
          {loading ? "Scanning..." : "Scan Receipt"}
        </button>

      </div>

      {result && (
        <div className="chart-card">

          <h2>AI Result</h2>

          <pre
            style={{
              color: "white",
              whiteSpace: "pre-wrap",
              fontSize: "16px",
            }}
          >
            {result}
          </pre>

        </div>
      )}

    </div>
  );
}

export default ReceiptScanner;