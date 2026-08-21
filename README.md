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

---

## Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v16 or higher)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_ORGANIZATION/YOUR_REPO_NAME.git
   cd YOUR_REPO_NAME
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to `http://localhost:5173` (or the URL provided in your terminal).

---

## Team Contributions & Division of Labor

| Team Member | Role | Key Deliverables |
| :--- | :--- | :--- |
| **Member 1** | Team Lead / State Manager | Initial repo scaffolding, global state management (`App.jsx`), and `mockData.js`. |
| **Member 2** | Frontend Developer A | Candidate cards display (`VotingOptions.jsx`, `VotingOption.jsx`) and click selection UI. |
| **Member 3** | Frontend Developer B | Voter form (`VoteForm.jsx`), dynamic results with progress bars (`Results.jsx`), and admin toggle controls. |
| **Member 4** | Database Engineer & QA | Relational database design (`schema.sql`), analytical query scripting (`queries.sql`), and documentation (`README.md`). |

---

## Tech Stack

* **Frontend:** React, HTML5, CSS3, JavaScript (ES6+)
* **Database Design:** SQL (MySQL / PostgreSQL compatible)
* **Version Control:** Git & GitHub