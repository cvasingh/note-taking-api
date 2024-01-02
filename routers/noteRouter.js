const { Router } = require('express');
const Note = require('../routers/note.model');
const { createNoteSchema, deleteNoteSchema } = require('../routers/note.schema');
const router = Router();


router.get('/', async (req, res) => {
    const { id } = req.query
    try {
        if (id) {
            const data = await Note.findById(id);

            if (!data) {
                return res.status(404).send({ msg: 'The note with the given ID was not found.' });
            }
            res.send({ data })
        } else {
            const data = await Note.find()
            res.send({ data })
        }
        // Handle the error response
    } catch (error) {
        res.status(error.statusCode || 500).send({ error: error.message });
    }
})

router.post('/', async (req, res) => {
    if (!createNoteSchema.safeParse(req.body).success) {
        return res.status(411).send(createNoteSchema.safeParse(req.body));
    }
    try {
        const newNote = new Note(req.body)

        const savedNote = await newNote.save();
        res.status(201).send({ msg: 'Note save successfully', data: savedNote })

        // Handle the error response
    } catch (error) {
        res.status(error.statusCode || 500).send({ error: error.message });
    }
})


router.put('/', async (req, res) => {
    const { id } = req.query

    if (!createNoteSchema.safeParse(req.body).success) {
        return res.status(411).send(createNoteSchema.safeParse(req.body));
    }

    try {
        const updatedDocument = await Note.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedDocument) {
            return res.status(404).send({ msg: 'The note with the given ID was not found.' });
        }

        res.status(200).send({ msg: 'Note update successfully', data: updatedDocument })
        // Handle the error response
    } catch (error) {
        res.status(error.statusCode || 500).send({ error: error.message });
    }
})

router.delete('/', async (req, res) => {
    const { id } = req.query
    if (!deleteNoteSchema.safeParse({ id }).success) {
        return res.status(411).send(deleteNoteSchema.safeParse({ id }));
    }

    try {
        const result = await Note.findByIdAndDelete({
            _id: id
        })
        if (!result) {
            return res.status(404).send({ msg: 'The note with the given ID was not found.' });
        }
        res.status(200).send({ msg: 'Note deleted successfully', data: result })
        // Handle the error response
    } catch (error) {
        res.status(error.statusCode || 500).send({ error: error.message });
    }
})


module.exports = router;