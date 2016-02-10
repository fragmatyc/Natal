'use strict';

class InscriptionRepository {
    findAll() {
        return new Promise(function (resolve, reject) {
            resolve("Hello World!");
        });
    }
}

module.exports = InscriptionRepository;