import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-content">
        <span className="hero-badge">Open Source Voting</span>
        <h1>Your Voice,<br />Your Vote</h1>
        <p className="hero-subtitle">
          A lightweight, transparent voting system for community events.
          Simple, fast, and fair.
        </p>
        <div className="hero-actions">
          <a href="#vote" className="btn-primary">Start Voting</a>
          <a href="#features" className="btn-secondary">Learn More</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">3</span>
            <span className="stat-label">Event Options</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Transparent</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-number">Free</span>
            <span className="stat-label">To Use</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
