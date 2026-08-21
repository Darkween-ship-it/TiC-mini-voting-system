import './HowItWorks.css';

const steps = [
  {
    step: '01',
    title: 'Browse Options',
    description: 'Look through the available campaign event options and decide which one you support.',
  },
  {
    step: '02',
    title: 'Enter Your Name',
    description: 'Type in your name so we can track that each person votes only once.',
  },
  {
    step: '03',
    title: 'Cast Your Vote',
    description: 'Click submit and your vote is counted. View live results instantly.',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works" id="how-it-works">
      <div className="how-container">
        <span className="section-tag">Process</span>
        <h2>How It Works</h2>
        <p className="section-desc">
          Three simple steps to make your voice heard.
        </p>
        <div className="steps-grid">
          {steps.map((s, i) => (
            <div className="step-card" key={i}>
              <span className="step-number">{s.step}</span>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
