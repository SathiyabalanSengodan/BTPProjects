const cds = require('@sap/cds');
const debug = require('debug')('srv:catalog-service');
const log = require('cf-nodejs-logging-support');
log.setLoggingLevel('info');

module.exports = cds.service.impl(async function () {


    const {
          } = this.entities;


















    this.on('userInfo', req => {
        let results = {};
        results.user = cds.context.user.id;
        results.locale = cds.context.locale;
        results.scopes = {};
        results.scopes.identified = req.user.is('identified-user');
        results.scopes.authenticated = req.user.is('authenticated-user');
        return results;
    });


});