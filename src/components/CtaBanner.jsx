import './CtaBanner.css';

function CtaBanner() {
  return (
    <section className="cta-banner" id="vote">
      <div className="cta-inner">
        <h2>Ready to Vote?</h2>
        <p>Head over to the voting page and cast your vote now.</p>
        <a href="/vote" className="btn-primary">Go to Voting Page</a>
      </div>
    </section>
  );
}

export default CtaBanner;
