import Image from "next/image";
import LandingCards from "@/components/LandingCards";
import * as React from 'react';
import InfoSection from "@/components/ServiceCard";

export default function Home() {
  return (
    <>
      <div
        id="home-section"
        style={{
          paddingTop: "6rem", // extra space for navbar
          minHeight: "100vh",
          background: "#f7f7f7",
        }}
      >
        <h1 style={{ fontWeight: 400, textAlign: "center", marginTop: "2.5rem" }}>
          Solirius Service Centre: Driving Success Through
          <br></br>
          <strong>Dedicated Support, Maintenance and Continuous Improvement.</strong>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            marginTop: "3rem",
            width: "100%",
          }}
        >
          <div style={{ flex: "0 0 420px", marginLeft: "10vw" }}>
            <LandingCards />
          </div>
          <div style={{ flex: "1 1 0", display: "flex", justifyContent: "center", marginLeft: "10vw" }}>
            <Image
              src="/sc-offerings.png"
              alt="Service Centre Offerings"
              width={400}
              height={400}
              style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
              priority
            />
          </div>
        </div>
        <div
          id="about-us-section"
          style={{
            marginTop: "6rem",
            padding: "3rem 10vw",
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
            display: "flex",
            alignItems: "center",
            gap: "3rem",
          }}
        >
          <div style={{ flex: "1 1 0" }}>
            <h2 style={{ fontWeight: 700, marginBottom: "1.5rem" }}>About Us</h2>
            <p>
              At Solirius Service Centre, we pride ourselves on delivering innovative solutions and exceptional support to our clients. Our experienced team is committed to helping your business thrive in a rapidly changing environment.
            </p>
            <ul style={{ marginTop: "1.5rem", paddingLeft: "1.2rem" }}>
              <li>Over 10 years of industry experience</li>
              <li>Dedicated team of certified professionals</li>
              <li>Proven track record of successful project delivery</li>
              <li>Focus on continuous improvement and client satisfaction</li>
            </ul>
          </div>
          <div style={{ flex: "0 0 300px", display: "flex", justifyContent: "center" }}>
            <Image
              src="/about-us-image.png"
              alt="About Us"
              width={460}
              height={260}
              style={{ borderRadius: "1rem", objectFit: "cover" }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "row",
            margin: "4rem 0",
            gap: "2rem",
            width: "100%",
          }}
        >
          <InfoSection
            heading="Service 1"
            description="We are passionate about delivering innovative solutions and exceptional support to our clients."
            bullet_points={[
              "10+ years of experience",
              "Certified professionals",
              "Client-focused approach"
            ]}
            imageSrc="/about-us-image.png"
            imageAlt="About Us"
            imageWidth={50}
            imageHeight={50}
          />
          <InfoSection
            heading="Service 2"
            description="Our comprehensive services are tailored to your business needs, from consulting to technology solutions."
            bullet_points={[
              "24/7 support",
              "Custom development",
              "Cloud migration"
            ]}
            imageSrc="/services-image.png"
            imageAlt="Our Services"
            imageWidth={50}
            imageHeight={50}
          />
          <InfoSection
            heading="Service 3"
            description="We help you grow, reduce risk, and operate efficiently with a proven track record of success."
            bullet_points={[
              "Proven results",
              "Continuous improvement",
              "Trusted by industry leaders"
            ]}
            imageSrc="/why-choose-us.png"
            imageAlt="Why Choose Us"
            imageWidth={50}
            imageHeight={50}
          />
        </div>
      </div>
    </>
  );
}
