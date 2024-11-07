const router = require('express').Router();
const express = require('express');

const AuthController = require('../controllers/AuthController');
router.post("/cadastro", AuthController.cadastro);
router.get("/login", AuthController.login);

module.exports= router