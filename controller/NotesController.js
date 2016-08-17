'use strict';
const Controller = require('./Controller');
const models     = require('../models');

let instance = null;

class NotesController extends Controller {

    getNotes(req, res) {
        return this.handleRequest(req, res, () => models.note.findAll({order: 'id'}));
    }

    addNote(req, res) {
        return this.handleRequest(req, res, () => models.note.create({
            title: req.body.title,
            description: req.body.description
        }));
    }

    updateNote(req, res) {
        return this.handleRequest(req, res, () => models.note.update({
            title: req.body.title,
            description: req.body.description
        }, {
            where: {
                id: req.params.id
            }
        }));
    }

    deleteNote(req, res) {
        return this.handleRequest(req, res, () => models.note.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => ({id: req.params.id})));
    }
}


module.exports = NotesController;