insert into usuario (nome_completo, nome_usuario, senha, telefone, data_nascimento, data_criacao, data_alteracao)
values('Henrique Rosa Carvalho','henriquerc18', 'h3nr1qu3_r0s4', '(51)98423-4155', '04/12/2000', '08/06/2022', '08/06/2022');

insert into usuario (nome_completo, nome_usuario, senha, telefone, data_nascimento, data_criacao, data_alteracao)
values('Thatiely Stober Appelt', 'thatystober', 'th4t1_5t0b3r', '(51)99926-8313', '24/04/1998', '07/06/2022', '07/06/2022');

insert into usuario (nome_completo, nome_usuario, senha, telefone, data_nascimento, data_criacao, data_alteracao)
values('Michael Maia', 'michaelmaia', 'm1ch43l_m414', '(51)99174-0358', '01/01/1992', '06/06/2022', '06/06/2022');

insert into caso (status, data_caso, tipo_animal, raca, nome_caso, imagem, latitude, longitude, data_criacao, data_alteracao, id_usuario)
values('Encontrado', '20/04/2022', 'Cachorro', 'Pastor Alemão', 'Tobi', 'https://abcdef.com/', '30.123456','29.654321', '21/04/2022', '21/04/2022', '1');

insert into caso (status, data_caso, tipo_animal, raca, nome_caso, imagem, latitude, longitude, data_criacao, data_alteracao, id_usuario)
values('Perdido', '18/04/2022', 'Cachorro', 'Pug', 'Mafalda', 'https://fedcba.com/', '30.9753123', '31.246889', '19/04/2022', '19/04/2022', '2');

insert into animal (id_animal, animal, imagem)
values (1, 'cachorro', 'https://conteudo.imguol.com.br/c/entretenimento/54/2020/04/28/cachorro-pug-1588098472110_v2_1x1.jpg');

insert into animal (id_animal, animal, imagem)
values (2, 'gato', 'https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg');

insert into animal (id_animal, animal, imagem)
values (3, 'passarinho', 'https://hhmagazine.com.br/wp-content/uploads/2019/12/p-1000x600.jpg');

insert into animal (id_animal, animal, imagem)
values (4, 'jacaré', 'https://www.hypeness.com.br/1/2021/10/66185f8b-jacar%C3%A9-1.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (1, 1, 'puddle', 'https://static1.patasdacasa.com.br/articles/9/11/59/@/5338-poodle-uma-raca-cheia-de-amor-para-dar-articles_media_mobile-3.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (2, 1, 'labrador', 'https://i0.wp.com/www.portaldodog.com.br/cachorros/wp-content/uploads/2021/09/labrador-retrieve-scaled.jpg?fit=1200%2C800&ssl=1&resize=1280%2C720');

insert into raca (id_raca, id_animal, raca, imagem)
values (3, 1, 'pug', 'https://www.petz.com.br/blog/wp-content/uploads/2020/04/pug-personalidade-pet.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (4, 1, 'dalmata', 'https://www.petz.com.br/cachorro/racas/dalmata/img/dalmata-caracteristicas-guia-racas.webp');

insert into raca (id_raca, id_animal, raca, imagem)
values (5, 2, 'persa', 'https://static1.patasdacasa.com.br/articles/4/39/24/@/16973-persa-branco-felino-precisa-de-cuidados-articles_media_mobile-1.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (6, 2, 'van turco', 'https://vetsmart-parsefiles.s3.amazonaws.com/2fc5ae032c7d8a390f5c6ab62e9db293_breed.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (7, 2, 'korat', 'https://cdn.pixabay.com/photo/2017/08/22/17/07/cat-2669735_960_720.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (8, 2, 'siamês', 'https://cptstatic.s3.amazonaws.com/imagens/enviadas/materias/materia15206/gato-siames.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (9, 3, 'arara', 'https://i2.wp.com/files.agro20.com.br/uploads/2020/02/Arara-canind%C3%A9-2.jpg?fit=1024%2C680&ssl=1');

insert into raca (id_raca, id_animal, raca, imagem)
values (10, 3, 'canário', 'http://cultura.jundiai.sp.gov.br/wp-content/uploads/2019/10/Can%C3%A1rio-da-terra.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (11, 3, 'papagaio', 'https://upload.wikimedia.org/wikipedia/commons/9/99/Papagaio-verdadeiro.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (12, 3, 'calopsita', 'https://http2.mlstatic.com/D_NQ_NP_830328-MLB47545498694_092021-O.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (13, 4, 'fuzzy lop', 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Conejillo_de_indias.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (14, 4, 'netherland dwarf', 'https://pbs.twimg.com/media/DZ2LDYKW4AAYx_d.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (15, 4, 'new zealand', 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Kaninchen1.jpg/1200px-Kaninchen1.jpg');

insert into raca (id_raca, id_animal, raca, imagem)
values (16, 4, 'tan rabbit', 'https://upload.wikimedia.org/wikipedia/commons/7/73/State_fair_06_029.jpg');
