import { useState } from "react";

function VoteForm({ selectedOption, onSubmitVote }) {
  const [voterName, setVoterName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (voterName.trim() === "") {
      setError("Please enter your name.");
      return;
    }

    if (!selectedOption) {
      setError("Please select an option.");
      return;
    }

    setError("");

    onSubmitVote(voterName.trim());

    setVoterName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Cast Your Vote</h2>

      <label htmlFor="voterName">Your Name</label>

      <input
        id="voterName"
        type="text"
        value={voterName}
        onChange={(e) => setVoterName(e.target.value)}
        placeholder="Enter your name"
      />

      {error && <p>{error}</p>}

      <button type="submit">Submit Vote</button>
    </form>
  );
}

export default VoteForm;