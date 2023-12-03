var medidaModel = require("../models/medidaModel");

function buscarAreaInteresse(req, res) {
    medidaModel.buscarAreaInteresse().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarAreaInteresseCienciasHumanas(req, res) {
    medidaModel.buscarAreaInteresseCienciasHumanas().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMateriasFacilidade(req, res) {
    medidaModel.buscarMateriasFacilidade().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMateriasDificuldade(req, res) {
    medidaModel.buscarMateriasDificuldade().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarInteresseLinguas(req, res) {
    medidaModel.buscarInteresseLinguas().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarInteresseArtesanato(req, res) {
    medidaModel.buscarInteresseArtesanato().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarInteresseArtesPerformaticas(req, res) {
    medidaModel.buscarInteresseArtesPerformaticas().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarInteresseArtesLiterarias(req, res) {
    medidaModel.buscarInteresseArtesLiterarias().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarInteresseArtesVisuais(req, res) {
    medidaModel.buscarInteresseArtesVisuais().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarNecessidadeReforco(req, res) {
    medidaModel.buscarNecessidadeReforco().then((resultado) => {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os dados: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
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
    buscarNecessidadeReforco

}