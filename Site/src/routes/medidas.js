var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/pesquisa", function (req, res) {
    medidaController.buscarAreaInteresse(req, res);
});

router.get("/cienciasHumanas", function (req, res) {
    medidaController.buscarAreaInteresseCienciasHumanas(req, res);
});

router.get("/materiasFacilidade", function (req, res) {
    medidaController.buscarMateriasFacilidade(req, res);
});

router.get("/materiasDificuldade", function (req, res) {
    medidaController.buscarMateriasDificuldade(req, res);
});

router.get("/interesseLinguas", function (req, res) {
    medidaController.buscarInteresseLinguas(req, res);
});

router.get("/interesseArtesanato", function (req, res) {
    medidaController.buscarInteresseArtesanato(req, res);
});

router.get("/interesseArtesPerformaticas", function (req, res) {
    medidaController.buscarInteresseArtesPerformaticas(req, res);
});

router.get("/interesseArtesLiterarias", function (req, res) {
    medidaController.buscarInteresseArtesLiterarias(req, res);
});

router.get("/interesseArtesVisuais", function (req, res) {
    medidaController.buscarInteresseArtesVisuais(req, res);
});

router.get("/necessidadeReforco", function (req, res) {
    medidaController.buscarNecessidadeReforco(req, res);
});


module.exports = router;