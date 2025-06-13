import React, { useState } from "react";
import logo from "../assets/logo.png";
import whatsappLogo from "../assets/whatsapp.png";
import twitterLogo from "../assets/twitter.png";
import footerBg from "../assets/footer-bg.png";
import overlayBg from "../assets/footer-overlay-bg.png";

const Footer = () => {
  const [isWhatsAppClicked, setIsWhatsAppClicked] = useState(false);
  const [isTwitterClicked, setIsTwitterClicked] = useState(false);

  const getCircleBtnStyle = (clicked: boolean) => ({
    backgroundColor: clicked ? "#303030" : "#ffffff",
    border: "none",
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    fontSize: "16px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s",
    padding: 0,
  });

  const styles = {
    footer: {
      backgroundImage: `url(${overlayBg}), url(${footerBg})`,
      backgroundSize: "cover, cover",
      backgroundPosition: "center, center",
      backgroundRepeat: "no-repeat, no-repeat",
      color: "white",
      padding: "50px 80px",
      display: "flex",
      flexDirection: "column" as const,
      justifyContent: "space-between",
      borderBottom: "1px solid #FFFFFF1F",
      position: "relative" as const, // TypeScript workaround for position
    },

    topBorder: {
      height: "1px",
      width: "100%",
      background:
        "linear-gradient(to right, #6d6d6d 0%, #FF8629 45%, #FFD729 50%, #FF8629 55%, #6d6d6d 100%)",
    },

    topSection: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap" as const,
      alignItems: "flex-start",
    },
    logoSection: {
      maxWidth: "330px",
      alignSelf: "flex-end",
    },
    logo: {
      height: "24px",
      marginBottom: "20px",
    },
    column: {
      display: "flex",
      flexDirection: "column" as const, // TypeScript workaround for flexDirection
      gap: "10px",
    },
    heading: {
      fontWeight: "bold",
      fontSize: "14px",
      marginBottom: "20px",
      color: "#cbd5e1",
    },
    link: {
      fontSize: "14px",
      color: "#fff",
      textDecoration: "none",
      marginBottom: "10px",
    },
    bottomSection: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#000000",
      padding: "20px 80px",
    },
    copyright: {
      fontSize: "12px",
      color: "#aaa",
    },
    icons: {
      display: "flex",
      gap: "0.5rem",
    },
    icon: {
      width: "16px",
      height: "16px",
    },
  };

  return (
    <footer>
      <div style={styles.topBorder} />
      <div style={styles.footer}>
        <div style={styles.topSection}>
          <div style={styles.logoSection}>
            <img src={logo} alt="Chainsecurity Logo" style={styles.logo} />
            <p style={{ fontSize: "14px", color: "#ccc", margin: "0px" }}>
              We rely solely on our in-house technologies and solutions,
              ensuring full control, independence, and innovation without
              third-party dependencies.
            </p>
          </div>

          <div style={styles.column}>
            <span style={styles.heading}>QUICK LINKS</span>
            <a href="/all-time-rankings" style={styles.link}>
              ALL TIME RANKINGS
            </a>
            <a href="/daily-ranking" style={styles.link}>
              DAILY RANKING
            </a>
            <a href="/new-listing" style={styles.link}>
              NEW LISTINGS
            </a>
            <a href="/submit-coin" style={styles.link}>
              SUBMIT COIN
            </a>
            <a href="/update-request" style={styles.link}>
              UPDATE REQUEST
            </a>
          </div>

          <div style={styles.column}>
            <span style={styles.heading}>LEGAL</span>
            <a href="verification" style={styles.link}>
              OFFICIAL VERIFICATION
            </a>
            <a href="/privacy-policy" style={styles.link}>
              PRIVACY POLICY
            </a>
            <a href="/terms" style={styles.link}>
              TERMS OF SERVICE
            </a>
            <a href="/cookie-policy" style={styles.link}>
              COOKIES POLICY
            </a>
          </div>

          <div style={styles.column}>
            <span style={styles.heading}>QUICK LINKS</span>
            <a href="/contact" style={styles.link}>
              CONTACT US
            </a>
            <a href="/service" style={styles.link}>
              SERVICES
            </a>
            <a href="/advertise" style={styles.link}>
              ADVERTISE
            </a>
            <a href="/blog" style={styles.link}>
              BLOG
            </a>
          </div>
        </div>
      </div>

      <div style={styles.bottomSection}>
        <span style={styles.copyright}>
          Copyright © 2024, All Right Reserved
        </span>
        <div style={styles.icons}>
          <button
            style={getCircleBtnStyle(isWhatsAppClicked)}
            onClick={() => setIsWhatsAppClicked(!isWhatsAppClicked)}
          >
            <img src={whatsappLogo} alt="WhatsApp" style={styles.icon} />
          </button>
          <button
            style={getCircleBtnStyle(isTwitterClicked)}
            onClick={() => setIsTwitterClicked(!isTwitterClicked)}
          >
            <img src={twitterLogo} alt="Twitter" style={styles.icon} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
