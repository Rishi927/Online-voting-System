CREATE DATABASE voting_system;
USE voting_system;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  `password` VARCHAR(255),
  `role` ENUM('admin','voter') DEFAULT 'voter'
);
 
CREATE TABLE elections (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(200),
  status ENUM('active','closed') DEFAULT 'active'
);

CREATE TABLE candidates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  election_id INT,
  `name` VARCHAR(100),
  FOREIGN KEY (election_id) REFERENCES elections(id) ON DELETE CASCADE
);

CREATE TABLE votes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  election_id INT,
  candidate_id INT,
  voter_id INT,
  UNIQUE KEY unique_vote (election_id, voter_id),
  FOREIGN KEY (election_id) REFERENCES elections(id) ON DELETE CASCADE,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id) ON DELETE CASCADE,
  FOREIGN KEY (voter_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Create default admin
INSERT INTO users (`name`, email, `password`, `role`) 
VALUES ('Admin', 'admin@vote.com', 'admin123', 'admin');
