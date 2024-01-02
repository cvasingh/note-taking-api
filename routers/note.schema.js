const z = require('zod');



const createNoteSchema = z.object({
    title: z.string(),
    content: z.string(),
})

const deleteNoteSchema = z.object({
    id: z.string(),
})

module.exports = {
    createNoteSchema,
    deleteNoteSchema
}