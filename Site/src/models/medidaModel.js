var database = require("../database/config");

function buscarAreaInteresse() {

    var instrucaoSql = `
    select areaInteresse, count(*) as totalAreaInteresse
        from pesquisa group by areaInteresse;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAreaInteresseCienciasHumanas() {

    var instrucaoSql = `
    select interesse, count(*) as totalCienciasHumanas from pesquisa
	    where areaInteresse = "Ciências Humanas"
		    group by interesse;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMateriasFacilidade() {

    var instrucaoSql = `
    select materiaFacilidade, count(*) as totalMateriaFacilidade 
        from pesquisa group by materiaFacilidade;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMateriasDificuldade() {

    var instrucaoSql = `
    select materiaDificuldade, count(*) as totalMateriaDificuldade 
        from pesquisa group by materiaDificuldade;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarInteresseLinguas() {

    var instrucaoSql = `
    select interesse, count(*) as totalLinguas
    from pesquisa where areaInteresse = "Linguas" 
    group by interesse;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarInteresseArtesanato() {

    var instrucaoSql = `
    select interesse, count(*) as totalArtesanato
    from pesquisa where areaInteresse = "Artesanato" 
    group by interesse;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarInteresseArtesPerformaticas() {

    var instrucaoSql = `
    select interesse, count(*) as totalArtesPerformaticas
    from pesquisa where areaInteresse = "Artes Performáticas" 
    group by interesse;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarInteresseArtesLiterarias() {

    var instrucaoSql = `
    select interesse, count(*) as totalArtesLiterarias
    from pesquisa where areaInteresse = "Artes Literárias" 
    group by interesse;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarInteresseArtesVisuais() {

    var instrucaoSql = `
    select interesse, count(*) as totalArtesVisuais
    from pesquisa where areaInteresse = "Artes Visuais" 
    group by interesse;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarNecessidadeReforco() {

    var instrucaoSql = `
    select necessidadeReforco, count(*) as totalNecessidadeReforco 
    from pesquisa group by necessidadeReforco;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarTentativas() {
    
    var idUsuario = req.body.idUsuarioServer;

    var instrucaoSql = `
    select count(*) as totalPesquisas 
    from pesquisa where id = ${idUsuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarAreaInteresse,
    buscarAreaInteresseCienciasHumanas,
    buscarMateriasFacilidade,
    buscarMateriasDificuldade,
    buscarInteresseLinguas,
    buscarInteresseArtesanato,
    buscarInteresseArtesPerformaticas,
    buscarInteresseArtesLiterarias,
    buscarInteresseArtesVisuais,
    buscarNecessidadeReforco,
    buscarTentativas
}
