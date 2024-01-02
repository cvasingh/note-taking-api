const request = require('supertest');
const app = require('./app'); // Import from app.js
const { expect } = require('chai');

describe('API Tests', function () {
    let createdDocumentId;

    // POST /note
    it('should create a new document', function (done) {
        request(app)
            .post('/note')
            .send({ title: 'Test Title', content: 'Test Content' })
            .end(function (err, res) {
                expect(res.statusCode).to.equal(201);
                expect(res.body.data).to.have.property('_id');
                createdDocumentId = res.body.data._id;
                done();
            });
    });

    // PUT /note?id=_id
    it('should update the document', function (done) {
        request(app)
            .put(`/note?id=${createdDocumentId}`)
            .send({ title: 'Updated Title', content: 'Updated Content' })
            .end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                expect(res.body.data.title).to.equal('Updated Title');
                done();
            });
    });

    // DELETE /note?id=_id
    it('should delete the document', function (done) {
        request(app)
            .delete(`/note?id=${createdDocumentId}`)
            .end(function (err, res) {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});
