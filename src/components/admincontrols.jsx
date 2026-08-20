function AdminControls({
  showResults,
  onToggleResults,
  onReset
}) {
  return (
    <section>
      <h2>Admin Controls</h2>

      <button onClick={onToggleResults}>
        {showResults ? "Hide Results" : "Show Results"}
      </button>

      <button onClick={onReset}>
        Reset Votes
      </button>
    </section>
  );
}

export default AdminControls;