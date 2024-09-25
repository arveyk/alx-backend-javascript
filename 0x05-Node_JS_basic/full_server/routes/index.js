const express = require('express');
const router = express.Router();

const AppController = require('./controllers/AppController');
const StudentsController = require('./controller/StudentsController');

router('/', AppController); 
router('/students/:major', StudentsController);

module.exports = router;
