function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <h3>Janith & Nimali</h3>
        <div className="footer-divider"></div>
        <p className="footer-text">
          Thank you for celebrating this special moment with us.
        </p>
        <p className="footer-text" style={{ fontSize: '12px', marginTop: '15px' }}>
          © {currentYear} All rights reserved. Made with love.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
