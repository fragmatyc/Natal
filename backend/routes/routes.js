module.exports = function (app) {
    require('../inscription/routes.js')(app);
    require('../tables/routes.js')(app);
}