# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

---

##  Project Architecture & Layout

```text
TiC-mini-voting-system/
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

 Getting Started

 Prerequisites
 [Node.js](https://nodejs.org/) (v16 or higher)
 [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

 Installation & Local Setup

1. Clone the repository: 
   ```bash
   git clone https://github.com/Darkween-ship-it/TiC-mini-voting-system.git
   cd TiC-mini-voting-system
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
   Navigate to `http://localhost:5173` .


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
## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware rules enabled. See the [TypeScript template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) and [`typescript-eslint`](https://typescript-eslint.io) documentation for details.
