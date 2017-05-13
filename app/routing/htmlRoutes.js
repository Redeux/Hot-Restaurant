"use strict";

const path = require("path"),
	fs = require("fs");

module.exports = function(app) {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirPath + "../public/home.html"));
	});

	app.get("/reserve", (req, res) => {
		res.sendFile(path.join(__dirPath + "../public/reservation.html"));
	});

	app.get("/table", (req, res) => {
		res.sendFile(path.join(__dirPath + "../public/tables.html"));
	});
}