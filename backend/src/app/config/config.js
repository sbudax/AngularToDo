// const mongoose = require("mongoose");

// const MONGOURI = "mongodb+srv://sbusiso:bheki24354@cluster0.2rpeklb.mongodb.net/?retryWrites=true&w=majority";

// const InitiateMongoServer = async () => {
//   try {
//     await mongoose.connect(MONGOURI, {
//       useNewUrlParser: true
//     });
//     console.log("Connected to DB !!");
//   } catch (e) {
//     console.log(e);
//     throw e;
//   }
// };

// module.exports = InitiateMongoServer;

const {Client} = require('pg');

const client = new Client({connectionString: process.env.DB_URL, ssl:{rejectUnauthorized:false}});

module.exports = client;
