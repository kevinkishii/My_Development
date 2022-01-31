CREATE TABLE pessoas (
    id INT NOT NULL PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(30) NOT NULL,
    nascimento DATE 
);

INSERT INTO pessoas (nome,nascimento) VALUES ('Nathally','1990-05-22');
INSERT INTO pessoas (nome,nascimento) VALUES ('Pedro','1995-07-17');
INSERT INTO pessoas (nome,nascimento) VALUES ('Marcela','2000-04-05');

UPDATE pessoas SET nome = 'Nathally Souza' WHERE id= '1';

DELETE FROM pessoas WHERE id = '3';

SELECT FROM pessoas ORDER BY nome;
SELECT FROM pessoas ORDER BY nome DESC;

ALTER TABLE pessoas ADD genero VARCHAR(1) NOT NULL AFTER nascimento;
UPDATE pessoas SET genero = 'F' WHERE id = '1';
UPDATE pessoas SET genero = 'M' WHERE id = '2';
UPDATE pessoas SET genero = 'F' WHERE id = '3';

SELECT COUNT(id), genero FROM pessoa GROUP BY genero;