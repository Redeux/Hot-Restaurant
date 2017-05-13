"use strict";

const path = require("path"),
	fs = require("fs");

module.exports = function(app) {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});

	app.get("/reserve", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/reservation.html"));
	});

	app.get("/tables", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/tables.html"));
	});
}