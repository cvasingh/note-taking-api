const { Schema, model } = require('mongoose');

const noteSchema = new Schema({
    title: {
        type: String
    },
    content: {
        type: String
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'modified_at' }
});

const Note = model('Note', noteSchema);

module.exports = Note;
