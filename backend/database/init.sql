-- Création de la base de données
CREATE DATABASE rh_solution;

-- Utilisation de la base de données
\ c rh_solution;

-- Création de la table "utilisateur"
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    gender VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    first_name VARCHAR(100) NOT NULL UNIQUE,
    last_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(100) NOT NULL,
    email_personnal VARCHAR(100) NOT NULL
);