import * as React from "react";
import Image from "next/image";

interface InfoSectionProps {
  id?: string;
  heading: string;
  description: string;
  bullet_points?: string[];
  imageSrc: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  reverse?: boolean;
  cardStyle?: React.CSSProperties; // Allow custom card styles
}

const InfoSection: React.FC<InfoSectionProps> = ({
  id,
  heading,
  description,
  bullet_points = [],
  imageSrc,
  imageAlt = "",
  imageWidth = 120,
  imageHeight = 90,
  reverse = false,
  cardStyle = {},
}) => (
    <div
        id={id}
        style={{
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            display: "flex",
            flexDirection: reverse ? "row-reverse" : "row",
            alignItems: "center",
            gap: "1.5rem",
            padding: "1.5rem",
            minWidth: 220,
            maxWidth: 320,
            width: "100%",
            marginBottom: "2rem",
            ...cardStyle,
        }}
    >
    <div style={{ flex: "1 1 0" }}>
        <h3 style={{ fontWeight: 700, marginBottom: "1rem", fontSize: "1.15rem" }}>{heading}</h3>
        <div style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                style={{ borderRadius: "0.75rem", objectFit: "cover" }}
            />
        </div>
        <p style={{ fontSize: "0.97rem" }}>{description}</p>
        {bullet_points.length > 0 && (
            <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem", fontSize: "0.97rem" }}>
                {bullet_points.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>
        )}
    </div>
  </div>
);

export default InfoSection;