-- SQL Queries for Mini Voting System Operations

-- READ OPERATIONS (Displaying Data)


-- bring out all available voting options
SELECT id, title, description FROM voting_options;

-- Get current vote count for every option (including options with 0 votes)
SELECT voting_options.id AS option_id, voting_options.title, COUNT(votes.id) AS total_votes
FROM options voting_options
LEFT JOIN votes ON voting_options.id = votes.option_id
GROUP BY voting_options.id, voting_options.title
ORDER BY total_votes DESC;

-- Get total number of votes cast across the entire system
SELECT COUNT(*) AS global_total_votes FROM votes;



-- WRITE OPERATIONS (Submitting a Vote)


--Register or retrieve a voter
INSERT INTO voters (voter_identifier, has_voted) 
VALUES ('justify@example.com', TRUE);

--Record the vote cast by the voter (e.g., voter_id = 1, option_id = 2)
INSERT INTO votes (voter_id, option_id) 
VALUES (1, 2);



--  ANALYTICS & ADMIN OPERATIONS


-- Find the current leading candidate / winner

SELECT voting_options.title, COUNT(votes.id) AS vote_count
FROM options voting_options
JOIN votes ON voting_options.id = votes.option_id
GROUP BY voting_options.id, voting_options.title
ORDER BY vote_count DESC
LIMIT 1;

-- Check if a specific voter has already cast a vote
SELECT has_voted 
FROM voters 
WHERE voter_identifier = 'justify@example.com';

-- Admin Operation: Reset all votes (Clear results)
TRUNCATE TABLE votes;
UPDATE voters SET has_voted = FALSE;