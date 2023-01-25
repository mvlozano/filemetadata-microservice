
# API Project: File Metadata Microservicefor FCC
[![Run on Repl.it](https://filemetadata-microservice.mvlozano.repl.co)]

## About
My solution for the [File Metadata Microservice challenge](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/file-metadata-microservice) for the freeCodeCamp API and Microservice certification. It was built based on the boilerplate available [here](https://github.com/freeCodeCamp/boilerplate-project-filemetadata/).

## Technologies
- **Node.js** and **Express** to create the server and handle routes, requests and responses.
- **Multer** to handle file uploading

## Endpoints:

Endpoints | Description | Params
----------|-------------|-------------
POST `/api/fileanalyse` | Returns JSON with the name, type and size values from uploaded file | *file

#### Example output:
* POST `/api/whoami` output:`{"name":"dukto_snap.desktop","type":"application/x-desktop","size":346}`

## How to use:
```
npm install
npm start
```

