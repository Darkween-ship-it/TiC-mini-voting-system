# TiC Mini Voting System

A lightweight, responsive web application for managing real-time polls, collecting votes, and analyzing results. Built as a collaborative group project covering client-side React state management and relational database design.

---

##  Key Features

###  Frontend (React)
* **Interactive Candidates UI:** Display voting options clearly with title, description, and vote actions.
* **Voter Input Validation:** Simple name/ID checks to prevent duplicate voting in a single session.
* **Dynamic Leaderboard & Results:** Instant vote tally updates featuring progress bars and visual winner badges.
* **Admin Controls:** Toggle results visibility (show/hide) and reset the poll back to initial state.

###  Database (SQL)
* **Relational Schema (`schema.sql`):** Fully structured tables for `voting_options`, `voters`, and `votes` with foreign keys and unique constraints.
* **Analytical Queries (`queries.sql`):** Pre-written queries for tracking total votes, calculating counts via `LEFT JOIN` and `GROUP BY`, and identifying top candidates.

---

##  Project Architecture & Layout

```text
tic-mini-voting-system/
├── database/
│   ├── schema.sql         # Database tables and sample seed data
│   └── queries.sql        # Data selection, counting, and analytics queries
├── src/
│   ├── components/
│   │   ├── Header.jsx         # App title and instructions
│   │   ├── VotingOptions.jsx  # Grid wrapper for option cards
│   │   ├── VotingOption.jsx   # Individual option card
│   │   ├── VoteForm.jsx       # Voter identifier input & submit
│   │   ├── Results.jsx        # Dynamic percentages & progress bars
│   │   └── AdminControls.jsx  # Reset poll & toggle results
│   ├── data/
│   │   └── mockData.js        # Initial voting candidates data
│   ├── App.jsx                # Core state logic (useState)
│   └── main.jsx               # App entry point
└── README.md                  # Project documentation

