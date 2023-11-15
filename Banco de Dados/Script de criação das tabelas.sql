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
foreign key (endereco) references endereco(idEndereco)
);

create table pesquisa(
fkUsuario int,
idPesquisa int,
areaInteresse varchar(45),
interesse varchar(45),
necessidadeReforco char(3),
materiaDificuldade varchar(10),
materiaFacilidade varchar(10)
);