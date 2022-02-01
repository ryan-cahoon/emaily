const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();


passport.use(new GoogleStrategy())

const PORT = process.env.PORT || 5000;

app.listen(PORT);

//app: the Express app to register this route handler with (most projects only have a singular app)
//get: when we call the get function, we are creating a route handler. THis handler watches for incoming http requests with a specific Method (GET) 
// '/': this is the route that we are watching for http requests from ('/' is localhost:5000 [or whatever host], the slash is implied)
//req (aka request): this is the JS Object representing the incoming request
//res (aka response): this is the JS Object representing the outgoing response
//res.send({ hi: 'there' }): we are attaching this JSON object to the response and sending it back to the user that made the request 
//const PORT = process.env.PORT || 5000: in production, the app listens on whatever port is passed into our app by heroku in env.PORT, 
//                                       but if this isnt defined (we're running it locally in dev) then listens on port 5000
