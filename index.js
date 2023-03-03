var express = require("express");
var cool = require("cool-ascii-faces");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 12345;

app.use(bodyParser.json());

var contacts = [
    {name : "pepe",
     phone : 12222
    },
    {
        name : "jose",
        phone : 667777
    }

];

const BASE_API_URL = "/api/v1";

app.get(BASE_API_URL + "/contacts",(request,response) => {
    response.json(contacts);
    console.log("New GET to /contacts");
});

app.post(BASE_API_URL + "/contacts",(request,response) => {
    var newContact = request.body; 

    console.log(`newContact = <${}>`);
    console.log("New POST to /contacts");

    contacts.push(newContact);

    response.sendStatus(201);
});






app.get("/faces",(request,response) => {
    response.send(cool());
    console.log("New request");
});

app.listen(port, ()=>{
    console.log(`Server read in port ${port}`);

});

