import Navbar from "@/components/Navbar"
import * as React from 'react';

export default function Home() {
  return (
    <>
      <Navbar />
      <div
        style={{
          paddingTop: "6rem", // extra space for navbar
          minHeight: "100vh",
          background: "#f7f7f7",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "2rem 3rem",
            maxWidth: "700px",
            width: "100%",
            margin: "0 auto", // centers horizontally
            minHeight: "60vh", // optional: gives it height
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
        </div>
      </div>
    </>
  );
}
