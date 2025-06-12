import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [isWhatsAppClicked, setIsWhatsAppClicked] = useState(false);
  const [isTwitterClicked, setIsTwitterClicked] = useState(false);

  const navLinks = [
    { name: 'Our Product', path: '/' },
    { name: 'Academy', path: '/academy' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const getCircleBtnStyle = (clicked: boolean) => ({
    backgroundColor: clicked ? '#303030' : '#ffffff',
    border: 'none',
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    fontSize: '16px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-color 0.3s',
    padding: 0,
  });

  const styles = {
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#000000',
      padding: '74px 79px',
      color: 'white',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontWeight: 'bold',
      fontSize: '14px',
    },
    logoImg: {
      height: '24px',
    },
    nav: {
      display: 'flex',
      gap: '2rem',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontWeight: 100,
    },
    activeLink: {
      fontWeight: 600,
    },
    actions: {
      display: 'flex',
      gap: '0.5rem',
    },
    icon: {
      width: '16px',
      height: '16px',
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <img src="src/assets/logo.png" alt="Chainsecurity Logo" style={styles.logoImg} />
        
      </div>

      <nav style={styles.nav}>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            style={{
              ...styles.navLink,
              ...(location.pathname === link.path ? styles.activeLink : {}),
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <div style={styles.actions}>
        <button
          style={getCircleBtnStyle(isWhatsAppClicked)}
          onClick={() => setIsWhatsAppClicked(!isWhatsAppClicked)}
        >
          <img src="src/assets/whatsapp.png" alt="WhatsApp Logo" style={styles.icon} />
        </button>
        <button
          style={getCircleBtnStyle(isTwitterClicked)}
          onClick={() => setIsTwitterClicked(!isTwitterClicked)}
        >
          <img src="src/assets/twitter.png" alt="Twitter Logo" style={styles.icon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
