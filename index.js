// require/import the express module(s)
const express = require('express'); 

const queries = require("./queries");

// instantiate an instance of the express class as 'app'
const app = express();              

// set a local port number for development
const localport = 3000;

// use the providers (heroku) port variable if there is one (production)
// otherwise use our local port
const port = process.env.PORT || localport;

// create a base route to direct root GET requests to
app.get('/', (request, response, next) => response.send('Hello There'));      



//////     CRUD ROUTES     //////


app.get("/person", (request, response, next) => {
    queries
      .list()
      .then(person => { response.json({person}); })
      .catch(next);
  });
  
//   app.post("/person", (request, response) => {
//     queries
//       .create(request.body.student)
//       .then(response.redirect("/"))
//       .catch(err => { response.send("error: ", err); });
//   });
  
//   app.get("/person/:id", (request, response, next) => {
//     queries
//       .read("id",request.params.id)
//       .then(student => { response.render( "view", { student: student, url:"view" }); })
//       .catch(next);
//   });
  
//   app.put("/person/:id", (request, response, next) => {
//     queries
//       .update(request.params.id, request.body.student)
//       .then(response.redirect("/person/"+request.params.id))
//       .catch(next);
//   });
  
//   app.delete("/person/:id", (request, response, next) => {
//     if (request.params.id === "19"){
//       response.redirect("/person")
//     } 
//     else {
//       queries
//         .delete(request.params.id)
//         .then(response.redirect("/person"))
//         .catch(next);
//     }
//   });
  
  


// tell the Express app to listen for requests on our port      
app.listen(port, () => console.log(`Server is now listening on port ${port}`));
