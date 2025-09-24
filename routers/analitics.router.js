const express = require('express');
const { countAthletesBySport } = require('../controllers/analititcs.controller');

const analiticsRouter = express.Router();

analiticsRouter.get('/amount-athletes-by-sport', countAthletesBySport);

module.exports = analiticsRouter;