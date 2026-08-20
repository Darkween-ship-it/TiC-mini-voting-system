import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-logo">TiC Vote</span>
          <p>A mini voting system built with React.</p>
        </div>
        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#vote">Vote</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 TiC. Built with React + Vite.</p>
      </div>
    </footer>
  );
}

export default Footer;
