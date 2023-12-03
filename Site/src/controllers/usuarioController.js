var usuarioModel = require("../models/usuarioModel");
var aquarioModel = require("../models/aquarioModel");

function autenticar(req, res) {
    var idUsuario = req.body.idUsuarioServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        
                                    res.json(resultadoAutenticar[0]);

                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                    }
                    
            ) .catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var cep = req.body.cepServer;
    var estado = req.body.estadoServer;     
    var cidade = req.body.cidadeServer;    
    var rua = req.body.ruaServer;     
    var numero = req.body.numeroServer; 
    var referencia = req.body.referenciaServer; 
    var nome = req.body.nomeServer;
    var dtNascimento = req.body.dtNascimentoServer;
    var telefone = req.body.telefoneServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    // var tentativas = req.body.tentativasServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Seu cidade está undefined!");
    } else if (rua == undefined) {
        res.status(400).send("Seu rua está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (referencia == undefined) {
        res.status(400).send("Seu referencia está undefined!");
    } else if (dtNascimento == undefined) {
        res.status(400).send("Seu dtNascimento está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(cep, estado, cidade, rua, numero, referencia, nome, dtNascimento, telefone, email, senha, tentativas)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function pesquisa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html

    var usuario = req.params.usuario;
    var areaInteresse = req.body.areaInteresseServer;
    var interesse = req.body.interesseServer; 
    var necessitaReforco = req.body.necessitaReforcoServer; 
    var dificuldadeMateria = req.body.dificuldadeMateriaServer; 
    var facilidadeMateria = req.body.facilidadeMateriaServer; 

    // Faça as validações dos valores
    if (areaInteresse == undefined) {
        res.status(400).send("Seu areaInteresse está undefined!");
    } else if (interesse == undefined) {
        res.status(400).send("Seu interesse está undefined!");
    } else if (necessitaReforco == undefined) {
        res.status(400).send("Seu necessitaReforco está undefined!");
    } else if (dificuldadeMateria == undefined) {
        res.status(400).send("Seu dificuldadeMateria está undefined!");
    } else if (facilidadeMateria == undefined) {
        res.status(400).send("Seu facilidadeMateria está undefined!");
    } else if (usuario == undefined) {
        res.status(400).send("Seu usuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.pesquisa(usuario, areaInteresse, interesse, necessitaReforco, dificuldadeMateria, facilidadeMateria)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar,
    pesquisa
}