CREATE TABLE events (id SERIAL PRIMARY KEY, name TEXT NOT NULL, capacity INT NOT NULL);
CREATE TABLE orders (
    id UUID PRIMARY KEY,
    event_id INT NOT NULL REFERENCES events(id),
    status TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
INSERT INTO events (name, capacity) VALUES
    ('Queima das Fitas - Noite Aberta', 200),
    ('Concerto da Orquestra Academica', 100),
    ('Tuna Universitaria - Gala', 50);
