-- Database: petfinder

-- DROP DATABASE petfinder;

CREATE DATABASE petfinder
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Portuguese_Brazil.1252'
    LC_CTYPE = 'Portuguese_Brazil.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
	
	
create table caso (
	id_caso serial primary key,
	status varchar(11) not null,
	data_caso date not null,
	tipo_animal varchar(15) not null,
	raca varchar(30) not null,
	nome_caso varchar(50) not null,
	imagem varchar(2500),
	latitude float(6) not null,
	longitude float(6) not null,
	data_criacao timestamp with time zone NOT NULL,
    data_alteracao timestamp with time zone NOT NULL,
    id_usuario integer
);


create table usuario (
	id_usuario serial primary key,
	nome_completo varchar(50) NOT NULL,
	nome_usuario varchar(50) not null,
	senha varchar(20) not null,
	telefone char(15) not null,
	data_nascimento date not null,
	data_criacao timestamp with time zone NOT NULL,
    data_alteracao timestamp with time zone NOT NULL
);

create table raca (
	id_raca integer not null primary key,
	id_animal varchar(30),
	raca varchar(30),
	imagem varchar(200)
);

create table animal (
	id_animal integer not null primary key,
	animal varchar(30),
	imagem varchar(200)
);


