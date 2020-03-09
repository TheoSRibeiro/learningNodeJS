--acesso ao mysql pelo terminal: mysql -h localhost -u root -p

CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome,
                    email,
                    idade) 
        VALUES( "Theo Ribeiro", 
                "theo@gmail.com", 
                28
        );

INSERT INTO usuarios
    (nome,
    email,
    idade)
VALUES( "Lorrany Cabral",
        "lorryc@gmail.com",
        24
);

INSERT INTO usuarios
    (nome,
    email,
    idade)
VALUES( "Maria",
        "maria@gmail.com",
        52
);

INSERT INTO usuarios
    (nome,
    email,
    idade)
VALUES( "Joao",
        "joao@gmail.com",
        28
);

--DELETANDO REGISTRO NO BD

DELETE FROM usuarios WHERE nome = "Joao";

--ATUALIZANDO REGISTRO NA TABELA
UPDATE usuarios SET nome = "Mariana" WHERE nome = "Maria";