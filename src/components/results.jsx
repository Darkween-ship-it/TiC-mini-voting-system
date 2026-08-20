function Results({ options, showResults, onReset }) {
  if (!showResults) {
    return null;
  }

  const totalVotes = options.reduce(
    (total, option) => total + option.votes,
    0
  );

  const sortedOptions = [...options].sort(
    (a, b) => b.votes - a.votes
  );

  const winner = sortedOptions[0];

  return (
    <section>
      <h2>Voting Results</h2>

      {totalVotes === 0 ? (
        <p>No votes have been submitted yet.</p>
      ) : (
        <>
          {sortedOptions.map((option) => {
            const percentage =
              Math.round((option.votes / totalVotes) * 100);

            return (
              <div key={option.id}>
                <div>
                  <strong>{option.title}</strong>

                  {winner.id === option.id && (
                    <span> 🏆 WINNER</span>
                  )}
                </div>

                <p>
                  {option.votes} votes — {percentage}%
                </p>

                <div>
                  <div
                    style={{
                      width: `${percentage}%`,
                      height: "20px",
                      backgroundColor: "blue",
                    }}
                  ></div>
                </div>
              </div>
            );
          })}

          <button onClick={onReset}>
            Reset Results
          </button>
        </>
      )}
    </section>
  );
}

export default Results;