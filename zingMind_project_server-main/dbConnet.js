const { Client } = require("@elastic/elasticsearch");
const exp = require("constants");
const fs = require("fs");

let client;
try {
  client = new Client({
    node: "http://localhost:9200",
    auth: {
      username: "elastic",
      password: "RgNqbr9YIAtBT_1V*cKg",
    },
    tls: {
      ca: fs.readFileSync("./http_ca.crt"),
      rejectUnauthorized: false,
    },
  });
  console.log("Database Connected");
} catch (error) {
  console.log("The error is :- ", error);
}
module.exports = client;
