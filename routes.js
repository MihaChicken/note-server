
const validate         = require('express-validation');
const validation       = require('./validation');


const NotesController = require('./controller/NotesController');

const notesController = new NotesController();

module.exports = app => {
    app.get('/notes', (req, res) => notesController.getNotes(req, res));
    app.post('/notes', validate(validation.postNotes), (req, res) => notesController.addNote(req, res));
    app.put('/notes/:id', validate(validation.putNotes), (req, res) => notesController.updateNote(req, res));
    app.delete('/notes/:id', validate(validation.deleteNotes), (req, res) => notesController.deleteNote(req, res));
};