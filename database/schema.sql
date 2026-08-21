--database schema for mini voting system

--create Voting-options table
CREATE TABLE voting_options (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

);

-- create voters table
CREATE TABLE voters (
    id INT PRIMARY KEY AUTO_INCREMENT,
    voter_identifier VARCHAR(100) UNIQUE NOT NULL, --voter name or email
    has_voted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

);

--create votes table
CREATE TABLE votes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    voter_id INT NOT NULL,
    option_id INT NOT NULL,
    voted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (voter_id) REFERENCES voters(id) ON DELETE CASCADE,
    FOREIGN KEY (option_id) REFERENCES voting_options(id) ON DELETE CASCADE,
    CONSTRAINT unique_voter_cast UNIQUE (voter_id), -- prevents duplicate votes per person
    
);