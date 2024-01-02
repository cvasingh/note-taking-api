
# Notes API
This API allows users to create, retrieve, update, and delete notes. It's built using Express and Mongoose.

## Getting Started
To get started with this API, clone the repository and install the required dependencies.

bash
Copy code
git clone [repository-url]
cd [repository-directory]
```node
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
```
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
```
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