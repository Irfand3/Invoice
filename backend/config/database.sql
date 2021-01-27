CREATE DATABASE invoice_project;

CREATE TABLE users(
    user_id INT GENERATED ALWAYS AS IDENTITY,
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255) NOT NULL,
    PRIMARY KEY(user_id)
);

CREATE TABLE invoices(
    invoice_id INT GENERATED ALWAYS AS IDENTITY,
    client VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT Now(),
    month VARCHAR(255) NOT NULL,
    amount INT NOT NULL,
    dueTo DATE NOT NULL,
    company VARCHAR(255) NOT NULL,
    paidStatus BOOLEAN NOT NULL,
    PRIMARY KEY(invoice_id),
    fk_user INT REFERENCES users(user_id),
    fk_client INT REFERENCES clients(client_id)
);

CREATE TABLE clients(
    client_id INT GENERATED ALWAYS AS IDENTITY,
    client_name VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT Now(),
    notes VARCHAR(255) NOT NULL,
    totalAmount INT NOT NULL DEFAULT 0,
    fk_user INT REFERENCES users(user_id),
    PRIMARY KEY(client_id)
);