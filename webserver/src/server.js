"use strict";
exports.__esModule = true;
var dotenv = require("dotenv");
var express = require("express");
var cors = require("cors");
var helmet = require("helmet");
var router_1 = require("./middleware/router");
/**
 * Configured system variables
 */
dotenv.config();
if (!process.env.PORT) {
    console.log("Unable to read configured port. Exiting!");
}
/**
 * Setup webserver object
 */
var app = express();
var port = parseInt(process.env.PORT, 10);
/**
 * Add middleware
 *      Note - registration order matters
 */
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/", router_1.todoRouter);
/**
 * Open listener on the port
 */
app.listen(port, function () {
    console.log("Now listening for requests on port " + port + ".");
});
