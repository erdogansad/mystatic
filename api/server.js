require("dotenv").config();
const path = require("path");
const express = require("express");
const server = express();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const dir = path.join(__dirname, "public");

server.use(helmet());
server.use(express.json());

server.use(cors());
server.use(morgan("combined"));
server.set("json spaces", 2);

server.all("/", (req, res) => res.status(200).json("Sad's API System"));
server.all("*", (req, res, next) => (req.method === "GET" ? next() : res.status(403).json({ error: "Forbidden" })));
server.use(express.static(dir));
server.all("*", (_, res) => res.status(403).json({ error: "not found" }));

server.listen(process.env.PORT, function () {
  console.log(`Listening on http://localhost:${process.env.PORT}/`);
});
