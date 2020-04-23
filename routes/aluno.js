const express = require("express");
const app = express();
const Router = express.Router();
const AlunoController = require("../controller/AlunoController");

Router.get("/", AlunoController.index);

module.exports = Router;