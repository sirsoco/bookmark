//dependencies
const express = require('express');

const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// configure body parasing for AJAX requests 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// add routes, both API and view
app.use(routes);

// connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/reactbooks",
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }
);

// start the API server
app.listen(PORT, () =>
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
    );
