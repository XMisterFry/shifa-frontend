import React, { useState, useEffect } from "react";

const DisclaimerOverlay = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Check if user already accepted disclaimer in this session
    const accepted = sessionStorage.getItem("disclaimerAccepted");
    if (accepted) {
      setShow(false);
    }
  }, []);

  const handleAccept = () => {
    sessionStorage.setItem("disclaimerAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
  <div style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#ffd33b",
    color: "#000000ff",
    overflowY: "auto",        // <-- ENABLE SCROLLING
    zIndex: 9999,
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"  // <-- PREVENT CENTERING ON SMALL SCREENS
  }}>
    <div style={{
      background: "#ffd33b",
      padding: "20px",
      borderRadius: "10px",
      width: "100%",
      maxWidth: "600px",
      textAlign: "center",
      marginTop: "40px"        // <-- Push slightly down for readability
    }}>
      <h2>Disclaimer</h2>

      <p>This chat does not save your data. If you close or reload, your conversation will reset.</p>

      <p>You can type in English, Hindi, or Urdu or Hindi in English Characters like "Mujhe Siko khareedna hai"</p>

      <p>You can ask questions like "Which medicine can help with stomach related problems", 
         "What does Siko help with", 
         "How can I buy Siko", 
         "I want to buy in bulk",
         "How much do 4 Siko 100ml cost"</p>

      <p>This is an AI-powered tool that helps customers know our products and where to buy or make wholesale enquiries.</p>

      <p>The chat only helps our customers know us better, do not misuse or make irrelevant questions.</p>

      <p>Always consult a qualified healthcare professional before taking any medical decision.</p>

      <button
        onClick={handleAccept}
        style={{
          padding: "12px 24px",
          backgroundColor: "#39bd18ff",
          border: "none",
          color: "white",
          cursor: "pointer",
          borderRadius: "6px",
          marginTop: "20px",
          fontSize: "16px"
        }}
      >
        I Understand
      </button>
    </div>
  </div>
);

};

export default DisclaimerOverlay;
