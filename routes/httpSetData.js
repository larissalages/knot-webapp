var express = require("express");
var router = express.Router();
var request = require("request");

/* GET Devices from a gateway. */
router.post("/", function(req, res, next) {
  const hostname = req.body.hostname;
  const port = req.body.port;
  const uuid = req.body.ownerUuid;
  const token = req.body.ownerToken;
  const thingUuid = req.body.thingUuid;
  const itemId = req.body.itemId;
  const itemData = req.body.itemData;
  var updateValues = {};
  if (itemData === "true") {
    updateValues = {
      set_data: [
        {
          sensor_id: parseInt(itemId),
          value: true
        }
      ]
    };
  } else if (itemData === "false") {
    updateValues = {
      set_data: [
        {
          sensor_id: parseInt(itemId),
          value: false
        }
      ]
    };
  } else {
    updateValues = {
      set_data: [
        {
          sensor_id: parseInt(itemId),
          value: parseInt(itemData)
        }
      ]
    };
  }

  const urll = "http://" + hostname + ":" + port + "/devices/" + thingUuid;
  console.log(urll);
  request(
    {
      method: "PUT",
      url: urll,
      body: updateValues,
      json: true,
      headers: {
        meshblu_auth_uuid: uuid,
        meshblu_auth_token: token,
        "User-Agent": "request"
      }
    },
    (err, resp, body) => {
      res.send(resp.body);
    }
  );
});

module.exports = router;
