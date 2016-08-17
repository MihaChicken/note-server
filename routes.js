
const validate         = require('express-validation');
const validation       = require('./validation');

const NotesController = require('./controller/NotesController');

const notesController = new NotesController();

module.exports = app => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
        next();
    });

    app.get('/notes', (req, res) => notesController.getNotes(req, res));
    app.post('/notes', validate(validation.postNotes), (req, res) => notesController.addNote(req, res));
    app.put('/notes/:id', validate(validation.putNotes), (req, res) => notesController.updateNote(req, res));
    app.delete('/notes/:id', validate(validation.deleteNotes), (req, res) => notesController.deleteNote(req, res));

    app.use((err, req, res, next) => {
        res.status(400).json(err);
    });
};