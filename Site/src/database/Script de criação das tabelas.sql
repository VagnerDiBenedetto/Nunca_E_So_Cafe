drop database cafeeconhecimento;

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
foreign key (idUsuario) references endereco(idEndereco)
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
	(null,'Vagner José Di Benedetto Villela de Andrade','1999-03-30','11976295687','vagner.benedetto99@gmail.com','Vagner123!');
    
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

select * from usuario
	join endereco
    on idUsuario = idEndereco;
select * from endereco;
select * from pesquisa;

select count(fkUsuario) from pesquisa
	where fkUsuario = 1;

select count(areaInteresse) from pesquisa
	where areaInteresse = "Ciências Humanas";
    
select count(areaInteresse) from pesquisa
	where areaInteresse = "Linguas";

select count(areaInteresse) from pesquisa
	where areaInteresse = "Artesanato";
    
select count(areaInteresse) from pesquisa
	where areaInteresse = "Artes Performáticas";
    
select count(areaInteresse) from pesquisa
	where areaInteresse = "Artes Literárias";
    
select count(areaInteresse) from pesquisa
	where areaInteresse = "Artes Visuais";
    
select count(interesse) from pesquisa
	where interesse = "Filosofia";
    
select count(interesse) from pesquisa
	where interesse = "Sociologia";
    
select count(interesse) from pesquisa
	where interesse = "Comunicação";
    
select count(interesse) from pesquisa
	where interesse = "História";
    
select count(interesse) from pesquisa
	where interesse = "Ciencia Politica";
    
select count(interesse) from pesquisa
	where interesse = "Administração";
    
select count(interesse) from pesquisa
	where interesse = "Inglês";
    
select count(interesse) from pesquisa
	where interesse = "Mandarim";
    
select count(interesse) from pesquisa
	where interesse = "Japonês";
    
select count(interesse) from pesquisa
	where interesse = "Espanhol";
    
select count(interesse) from pesquisa
	where interesse = "Francês";
    
select count(interesse) from pesquisa
	where interesse = "Alemão";
    
select count(interesse) from pesquisa
	where interesse = "Biscuit";
    
select count(interesse) from pesquisa
	where interesse = "Decoupage";
    
select count(interesse) from pesquisa
	where interesse = "Patchwork";
    
select count(interesse) from pesquisa
	where interesse = "Reciclagem";
    
select count(interesse) from pesquisa
	where interesse = "Bordado";
    
select count(interesse) from pesquisa
	where interesse = "Fuxico";
    
select count(interesse) from pesquisa
	where interesse = "Velas Artesanais";
    
select count(interesse) from pesquisa
	where interesse = "Sabonetes Artesanais";
    
select count(interesse) from pesquisa
	where interesse = "Trabalho em MDF";
    
select count(interesse) from pesquisa
	where interesse = "Dança";
    
select count(interesse) from pesquisa
	where interesse = "Música";
    
select count(interesse) from pesquisa
	where interesse = "Teatro";
    
select count(interesse) from pesquisa
	where interesse = "Drama";
    
select count(interesse) from pesquisa
	where interesse = "Poesia";
    
select count(interesse) from pesquisa
	where interesse = "Prosa";
    
select count(interesse) from pesquisa
	where interesse = "Desenho";
    
select count(interesse) from pesquisa
	where interesse = "Pintura";
    
select count(interesse) from pesquisa
	where interesse = "Cinema";

select count(interesse) from pesquisa
	where interesse = "Cerâmica";
    
select count(interesse) from pesquisa
	where interesse = "Escultura";
    
select count(interesse) from pesquisa
	where interesse = "Fotografia";
    
select count(necessidadeReforco) from pesquisa
	where necessidadeReforco = "Sim";
    
select count(necessidadeReforco) from pesquisa
	where necessidadeReforco = "Não";
    
select count(materiaDificuldade) from pesquisa
	where materiaDificuldade = "Matemática";
    
select count(materiaDificuldade) from pesquisa
	where materiaDificuldade = "Português";
    
select count(materiaDificuldade) from pesquisa
	where materiaDificuldade = "História";
    
select count(materiaDificuldade) from pesquisa
	where materiaDificuldade = "Geografia";
    
select count(materiaDificuldade) from pesquisa
	where materiaDificuldade = "Quimica";
    
select count(materiaDificuldade) from pesquisa
	where materiaDificuldade = "Física";
    
select count(materiaDificuldade) from pesquisa
	where materiaDificuldade = "Biologia";
    
select count(materiaDificuldade) from pesquisa
	where materiaDificuldade = "Redação";
    
select count(materiaDificuldade) from pesquisa
	where materiaDificuldade = "Geometria";
    
select count(materiaFacilidade) from pesquisa
	where materiaFacilidade = "Matemática";
    
select count(materiaFacilidade) from pesquisa
	where materiaFacilidade = "Português";
    
select count(materiaFacilidade) from pesquisa
	where materiaFacilidade = "História";
    
select count(materiaFacilidade) from pesquisa
	where materiaFacilidade = "Geografia";
    
select count(materiaFacilidade) from pesquisa
	where materiaFacilidade = "Quimica";
    
select count(materiaFacilidade) from pesquisa
	where materiaFacilidade = "Física";
    
select count(materiaFacilidade) from pesquisa
	where materiaFacilidade = "Biologia";
    
select count(materiaFacilidade) from pesquisa
	where materiaFacilidade = "Redação";
    
select count(materiaFacilidade) from pesquisa
	where materiaFacilidade = "Geometria";
    