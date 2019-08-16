const express = require('express');
const graphHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const uri = "mongodb+srv://rainboard:.Amdapua45300@graphql-rn775.gcp.mongodb.net/test?retryWrites=true&w=majority";
const app = express();

mongoose.connect(uri, { useNewUrlParser: true });
mongoose.connection.once('open', () => console.log("DB connected"));

app.use('/graphql', graphHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => console.log('Listening on port 4000'));