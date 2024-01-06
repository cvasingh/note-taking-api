
# Notes API
This API allows users to create, retrieve, update, and delete notes. It's built using Express and Mongoose.

## Getting Started
To get started with this API, clone the repository and install the required dependencies.

```node
git clone https://github.com/cvasingh/note-taking-api.git
cd note-taking-api
npm install
```

### API Endpoints
#### Retrieve Notes
```node
URL: /note
Method: GET
URL Query Params:
id (optional): ID of the note to retrieve. If provided, the API will return the specific note; otherwise, it will return all notes.
Success Response:
Code: 200
Content: { data : [array of notes] } or { data : note }
Error Response:
Code: 404 NOT FOUND
Content: { msg : "The note with the given ID was not found." }
Code: 500 INTERNAL SERVER ERROR
Content: { error : "error message" }
```

#### Create Note
```node
URL: /
Method: POST
Data Params: JSON object representing the note to be created.
Success Response:
Code: 201 CREATED
Content: { msg: "Note saved successfully", data: note }
Error Response:
Code: 411 LENGTH REQUIRED
Content: { /* validation error object */ }
Code: 500 INTERNAL SERVER ERROR
Content: { error : "error message" }
```

#### Update Note
```node
URL: /
Method: PUT
URL Query Params:
id: ID of the note to update.
Data Params: JSON object with updated note data.
Success Response:
Code: 200 OK
Content: { msg: "Note updated successfully", data: updatedNote }
Error Response:
Code: 404 NOT FOUND
Content: { msg: "The note with the given ID was not found." }
Code: 411 LENGTH REQUIRED
Content: { /* validation error object */ }
Code: 500 INTERNAL SERVER ERROR
Content: { error : "error message" }
```

#### Delete Note
```node
URL: /
Method: DELETE
URL Params:
id: ID of the note to delete.
Success Response:
Code: 200 OK
Content: { msg: "Note deleted successfully", data: deletedNote }
Error Response:
Code: 404 NOT FOUND
Content: { msg: "The note with the given ID was not found." }
Code: 411 LENGTH REQUIRED
Content: { /* validation error object */ }
Code: 500 INTERNAL SERVER ERROR
Content: { error : "error message" }
Running the Server
To start the server, run:
```

Before starting the server, make sure that port 3000 is available and your machine has a stable internet connection to ensure the application runs smoothly. To start the server, run:
```node
npm start
```

## Running Tests
To run the automated test suite, use the `npm test` command. This will execute the tests defined in your test files using Mocha and Chai.

```node
npm test
```

## Swagger Documentation
I have generated Swagger documentation for this API, which makes it easier to understand and interact with the endpoints. You can access the Swagger UI at the following URL:

```node
npm start
```

[Swagger UI](http://localhost:3000/api-docs) - Swagger UI for exploring and testing the API endpoints.


To see the API's detailed documentation, you can refer to the [Swagger JSON file](swagger_output.json) included in this repository.