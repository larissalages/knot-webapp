module.exports = function(io) {
  var express = require("express");
  var MeshbluSocketIO = require("meshblu");
  var router = express.Router();
  var request = require("request");

  var meshblu = new MeshbluSocketIO({
    resolveSvr: false,
    hostname: "knot.local",
    port: 3000,
    uuid: "",
    token: "",
    protocol: "ws"
  });
  var responses = {};

    io.on('connection', function(client) {
      client.on('subscribe', (req) => {
      const hostname = req.hostname;
      const port = req.port;
      const uuid = req.ownerUuid;
      const token = req.ownerToken;
      const thingUuid = req.thingUuid;
      console.log(req);

      meshblu["_options"].hostname = hostname;
      meshblu["_options"].port = port;
      meshblu["_options"].uuid = uuid;
      meshblu["_options"].token = token;

      meshblu.connect();
      meshblu.on("ready", function(response) {
        console.log("####################################");
        console.log(JSON.stringify(response, null, 2));
        var device = {
          uuid: thingUuid
        };
        meshblu.subscribe(device);
      });

      meshblu.on("notReady", function(response) {
        console.log("<><><<><>><<><><><><><><><><><><><><><><><>");
        console.log(response);
      });

      meshblu.on("message", function(response) {
        console.log("on message");
        console.log(JSON.stringify(response, null, 2));
        client.emit(thingUuid, JSON.stringify(response, null, 2));
      });

    });

  });

  return router;
}