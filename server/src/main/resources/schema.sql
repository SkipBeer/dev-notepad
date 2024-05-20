CREATE TABLE IF NOT EXISTS users (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    login VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    is_auth BOOLEAN
);


CREATE TABLE IF NOT EXISTS courses (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(512) NOT NULL,
    user_id BIGINT REFERENCES users (id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS comments (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    text VARCHAR(1000) NOT NULL,
    user_id BIGINT REFERENCES users (id) ON DELETE CASCADE,
    course_id BIGINT REFERENCES courses (id) ON DELETE CASCADE
);
