'use strict';

const { Organisation } = require('../../database/models');

module.exports = function getOrganisations(req, res) {
    return Organisation.fetchAll({withRelated:[
      'services','contactUsers'
    ]})
        .then(organisations => res.json(organisations.serialize({ omitPivot: true })));
};
