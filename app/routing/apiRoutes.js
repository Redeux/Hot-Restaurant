"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();

var tablesArray = require("./../data/tables.json");

module.exports = function(app) {

    app.get("/api/tables", function(req, res) {
        var tables = req.body;
        res.json(tables);
    });


    app.get("/api/waitlist", function(req, res) {
        var tables = req.body;
        res.json(tables);
    });
    if (tablesArray.length <= 5) {
        app.post("/api/tables", function(req, res) {
            // req.body hosts is equal to the JSON post sent from the user
            var newTable = req.body;

            console.log(newTable);

            // We then add the json the user sent to the character array
            tablesArray.push(newTable);

            // We then display the JSON to the users
            res.json(newTable);
        });

    } else {
        app.post("/api/waitlist", function(req, res) {
            // req.body hosts is equal to the JSON post sent from the user
            var newTable = req.body;

            console.log(newTable);

            // We then add the json the user sent to the character array
            tablesArray.push(newTable);

            // We then display the JSON to the users
            res.json(newTable);
        });
    }
}
