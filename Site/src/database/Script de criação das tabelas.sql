create database cafeEconhecimento;

use cafeEconhecimento;

create table endereco(
idEndereco int primary key auto_increment,
CEP char(8),
Estado varchar(45),
cidade varchar(45),
rua varchar(45),
numero varchar(20),
referencia varchar(100)
);

create table usuario(
idUsuario int primary key auto_increment,
nome varchar(45),
dtNascimento date,
telefone char(11),
email varchar(45),
senha varchar(45),
fkEndereco int,
foreign key (fkEndereco) references endereco(idEndereco)
);

create table pesquisa(
fkUsuario int,
idPesquisa int primary key auto_increment,
areaInteresse varchar(45),
interesse varchar(45),
necessidadeReforco char(3),
materiaDificuldade varchar(10),
materiaFacilidade varchar(10),
foreign key (fkUsuario) references usuario(idUsuario)
);

insert into endereco values
	(null,'08664220','São Paulo','Suzano','Rua João Renzi','70','Casa');

insert into usuario values
	(null,'Vagner José Di Benedetto Villela de Andrade','1999-03-30','11976295687','vagner.benedetto.villela@gmail.com','Vagner123!',1);
    
insert into pesquisa values
	(1,null,'Artesanato','Trabalho em MDF','Sim','Português','História'),
	(1,null,'Artes Visuais','Cinema','Não','Português','Matemática'),
	(1,null,'Ciências Humanas','Filosofia','Não','Quimica','Português'),
	(1,null,'Ciências Humanas','Sociologia','Sim','Matemática','Redação'),
	(1,null,'Ciências Humanas','Ciência Politica','Sim','Redação','Matemática'),
	(1,null,'Artes Literárias','Poesia','Sim','Matemática','Biologia'),
	(1,null,'Artes Visuais','Pintura','Não','Física','História'),
	(1,null,'Artes Visuais','Fotografia','Não','Redação','Matemática'),
	(1,null,'Ciências Humanas','Filosofia','Sim','Matemática','Português'),
	(1,null,'Artes Visuais','Desenho','Sim','Geografia','Matemática'),
	(1,null,'Ciências Humanas','Ciência Politica','Sim','Redação','Matemática'),
	(1,null,'Artes Performáticas','Teatro','Sim','Geometria','Português'),
	(1,null,'Artes Literárias','Drama','Sim','Redação','Matemática'),
	(1,null,'Ciências Humanas','Ciência Politica','Não','Quimica','História'),
	(1,null,'Ciências Humanas','Filosofia','Não','Quimica','Português'),
	(1,null,'Artes Literárias','Drama','Não','uimica','Português'),
	(1,null,'Ciências Humanas','Comunicação','Não','Matemática','Redação'),
	(1,null,'Artes Performáticas','Dança','Não','Biologia','Matemática'),
	(1,null,'Ciências Humanas','Ciência Politica','Não','Português','Geografia'),
	(1,null,'Artes Visuais','Desenho','Não','Física','Geografia'),
	(1,null,'Artes Visuais','Cinema','Não','Quimica','História'),
	(1,null,'Ates Literárias','Prosa','Sim','uimica','Português'),
	(1,null,'Artes Visuais','Cinema','Sim','Matemática','Português'),
	(1,null,'Ciências Humanas','Filosofia','Não','Biologia','Matemática'),
	(1,null,'Artes Visuais','Cinema','Sim','Quimica','Física'),
	(1,null,'Ciências Humanas','História','Não','Quimica','Matemática'),
	(1,null,'Artes Performáticas','Teatro','Sim','Redação','Biologia'),
	(1,null,'Artes Performáticas','Música','Sim','Redação','Português'),
	(1,null,'Artes Performáticas','Música','Não','Física','Português'),
	(1,null,'Ciências Humanas','História','Sim','Português','História'),
	(1,null,'Linguas','Francês','Não','Redação','Física'),
	(1,null,'Artes Visuais','Pintura','Não','Português','Matemática'),
	(1,null,'Ciências Humanas','Filosofia','Não','Matemática','Geografia'),
	(1,null,'Linguas','Inglês','Sim','Quimica','Geografia'),
	(1,null,'Artes Visuais','Fotografia','Sim','Redação','Geografia'),
	(1,null,'Linguas','Inglês','Não','Biologia','Português'),
	(1,null,'Artesanato','Trabalho em MDF','Não','Redação','Matemática'),
	(1,null,'Artes Visuais','Cinema','Não','Física','História'),
	(1,null,'Ciências Humanas','Comunicação','Não','Biologia','Português'),
	(1,null,'Ciências Humanas','Administração','Sim','Física','História'),
	(1,null,'Artes Performáticas','música','Não','Geografia','Matemática'),
	(1,null,'Ciências Humanas','Filosofia','Não','Quimica','História'),
	(1,null,'Artes Visuais','Desenho','Não','Geografia','Matemática'),
	(1,null,'Artes Performáticas','Música','Não','Quimica','Português'),
	(1,null,'Artes Visuais','Fotografia','Sim','Português','Matemática'),
	(1,null,'Artes Literárias','Drama','Sim','Matemática','Hitória'),
	(1,null,'Artes Performáticas','Dança','Não','Matemática','Redação'),
	(1,null,'Artes Visuais','Desenho','Sim','Física','História'),
	(1,null,'Artes Visuais','Fotografia','Sim','Geometria','Português'),
	(1,null,'Artes Performáticas','Teatro','Não','Física','História'),
	(1,null,'Artes Literárias','Drama','Sim','Matemática','Português'),
	(1,null,'Ciências Humanas','História','Não','Matemática','Português');

select * from usuario;
select * from endereco;
select * from pesquisa;
-- drop database cafeeconhecimento;