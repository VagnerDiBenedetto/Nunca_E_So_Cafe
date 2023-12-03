var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT usuario.*,
        (select count(fkUsuario) from pesquisa where fkUsuario = (select idUsuario from usuario where email = '${email}')) as tentativas
        FROM usuario WHERE email = '${email}' AND senha = '${senha}'
        ;    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(cep, estado, cidade, rua, numero, referencia, nome, dtNascimento, telefone, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucaoEndereco = `
        INSERT INTO endereco (CEP, Estado, cidade, rua, numero, referencia) 
        VALUES ('${cep}', '${estado}', '${cidade}', '${rua}', '${numero}', '${referencia}');
    `;

    var instrucaoUsuario = `
        INSERT INTO usuario (nome, dtNascimento, telefone, email, senha) 
        VALUES ('${nome}', '${dtNascimento}', '${telefone}', '${email}', '${senha}');
    `;

    console.log("Executando a instrução SQL de endereço: \n" + instrucaoEndereco);

    return database.executar(instrucaoEndereco)
        .then(() => {
            console.log("Endereço inserido com sucesso.");
            console.log("Executando a instrução SQL de usuário: \n" + instrucaoUsuario);
            return database.executar(instrucaoUsuario);
        })
        .then(() => {
            console.log("Usuário inserido com sucesso.");
        })
        .catch((erro) => {
            console.error("Erro ao executar as consultas:", erro);
            throw erro;
        });


}

function pesquisa(usuario, areaInteresse, interesse, necessitaReforco, dificuldadeMateria, facilidadeMateria) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisa():", usuario, areaInteresse, interesse, necessitaReforco, dificuldadeMateria, facilidadeMateria);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.

    var instrucaoPesquisa = `
    INSERT INTO pesquisa (fkUsuario, areaInteresse, interesse, necessidadeReforco, materiaDificuldade, materiaFacilidade) 
    VALUES (${usuario}, '${areaInteresse}', '${interesse}', '${necessitaReforco}', '${dificuldadeMateria}', '${facilidadeMateria}');
    `;

    console.log("Executando a instrução SQL de endereço: \n" + instrucaoPesquisa);

    return database.executar(instrucaoPesquisa)
        .then(() => {
            console.log("Usuário Pesquisa com sucesso.");
        })
        .catch((erro) => {
            console.error("Erro ao executar as consultas:", erro);
            throw erro;
        });


}

module.exports = {
    autenticar,
    cadastrar,
    pesquisa
};