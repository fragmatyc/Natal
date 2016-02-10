var InscriptionService = require('./service');

module.exports = function (app) {
    var inscriptionService = new InscriptionService();
    
    app.get('/api/Inscription/:id?', function (req, res) {
        
        if (req.params.id) {
            res.json({
                success: false,
                reason: 'Not implemented'
            });
        } else {
            
            // Dummy Code :)
            inscriptionService.findAll().then(
                // Code exécuté si succès!
                function (data) {
                    res.json({
                        success: true,
                        data: data
                    });
                }
            ).catch(
                // Code exécuté si erreur!
                function (error) {
                    res.json({
                        success: false,
                        reason: error
                    });
                }
            );
        }
    });
    
    app.post('/api/Inscription', function (req, res) {
        res.json({
            success: false,
            reason: 'Not implemented'
        });
    });
}