'use strict';
let getNoteSchema = require('../schema/noteSchema');

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('note', getNoteSchema(DataTypes), {timestamps: false});
};