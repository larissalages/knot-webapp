var express = require("express");
var MeshbluSocketIO = require("meshblu");
var router = express.Router();

var meshblu = new MeshbluSocketIO({
  resolveSvr: false,
  hostname: "knot-test.cesar.org.br",
  port: 3000,
  uuid: "b95fe583-441f-484c-b123-0d7f04ff0000",
  token: "40d9a77d6235c036e8824867922614f120238d5d",
  protocol: "ws"
});

meshblu.on('ready', function () {
    console.log('Getting devices from GW');
    /*
     * Returns all the devices (things) from the specified gateway. If "*" is
     * passed, returns the devices from all gateways.
     */
    meshblu.devices({
            "gateways": ["*"] // Either a list of gw uuids or "*".
        }, function (result) {
            console.log('Devices:');
            console.log(JSON.stringify(result, null, 2));
        });
    });

meshblu.on('notReady', function () {
    console.log('Connection not authorized');
});

meshblu.connect();
