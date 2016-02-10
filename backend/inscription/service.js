'use strict';
var InscriptionRepository = require('./repository');

class InscriptionService {
    constructor() {
        this.inscriptionRepository = new InscriptionRepository();
    }
    
    findAll() {
        // Retourne la "Promise" du Repository
        return this.inscriptionRepository.findAll();
    }
}

module.exports = InscriptionService;