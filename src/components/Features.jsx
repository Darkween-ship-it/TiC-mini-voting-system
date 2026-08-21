import './Features.css';

const features = [
  {
    icon: '🗳',
    title: 'Simple Voting',
    description: 'Select your preferred option and submit your vote in seconds. No complicated forms.',
  },
  {
    icon: '🔒',
    title: 'One Vote Per Person',
    description: 'Each voter can only vote once, ensuring fair and accurate results.',
  },
  {
    icon: '📊',
    title: 'Live Results',
    description: 'See real-time vote counts and percentages as votes come in.',
  },
];

function Features() {
  return (
    <section className="features" id="features">
      <div className="features-container">
        <span className="section-tag">Features</span>
        <h2>Why use TiC Voting?</h2>
        <p className="section-desc">
          Everything you need to run a quick, fair community vote.
        </p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
