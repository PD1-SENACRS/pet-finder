insert into usuario (nome_usuario, senha, telefone, data_nascimento, data_criacao)
values('Henrique','h3nr1qu3_r0s4', '(51)98423-4155', '04/12/2000', '23/04/2022');

insert into usuario (nome_usuario, senha, telefone, data_nascimento, data_criacao)
values('Thatiely', 'th4t1_5t0b3r', '(51)99926-8313', '24/04/1998', '20/04/2022');

insert into caso (status, data_caso, tipo_animal, raca, nome_caso, imagem, latitude, longitude)
values('Encontrado', '20/04/2022', 'Cachorro', 'Pastor Alemão', 'Tobi', 'https://abcdef.com/', '30.123456','29.654321');

insert into caso (status, data_caso, tipo_animal, raca, nome_caso, imagem, latitude, longitude)
values('Perdido', '18/04/2022', 'Cachorro', 'Pug', 'Mafalda', 'https://fedcba.com/', '30.9753123', '31.246889');

insert into insercao (id_caso, id_usuario)
values ('1','1');

insert into insercao (id_caso, id_usuario)
values ('2','2');