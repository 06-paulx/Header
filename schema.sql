CREATE DATABASE properties;

USE properties;

CREATE TABLE listings (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(500),
  summary VARCHAR(500),
  description VARCHAR(500),
  star_rating INT NOT NULL,
  review_count INT NOT NULL,
  photo_url VARCHAR(8000)
);
