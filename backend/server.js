const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./src/app/config/config");
const user = require("./src/app/routes/user");
const cors = require("cors");
var corsOptions = {
  origin: '*'
};
// Initiate Mongo Server
InitiateMongoServer();

const app = express();
app.use(cors(corsOptions))
app.use(express.json())
// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});

// const express = require("express"); // import express library
// const cors = require("cors"); //import cors module
// const app = express(); //Initialize express

// require("./src/app/config/dotenv"); //Import your environmental configs


// const client = require("../backend/src/app/config/config");


// app.use(express.json());
// app.use(cors());

// const port = process.env.PORT || 5050;

// const hostURL = '0.0.0.0'; //Fault-Tolerant listening port for Backend. Picks available dynamic IPv4 and IPv6 addresses of the local host

// client.connect((error) =>{ // Connect to the Database
//    if (error) {
//      console.log("Error")
//      }
//   else {
//     console.log("Data logging initialised");
//    }

// });

// app.get("/", (request, response) =>{
//     response.status(200).send("Sever Initialized and Online. Ready to take OFF!");
// });

// // app.use("/user", user); // User endpoint API


// app.listen(port, process.env.baseUrl , () =>{  
//    console.log(`Here we go, All Engines started at ${port}.`) 
// });
 

