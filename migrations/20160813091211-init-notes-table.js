'use strict';

let getNoteSchema = require('../schema/noteSchema');

module.exports = {
    up(queryInterface, Sequelize) {
        return queryInterface.createTable('notes', getNoteSchema(Sequelize));
    },

    down(queryInterface, Sequelize) {
        return queryInterface.dropTable('notes');
    }
};
