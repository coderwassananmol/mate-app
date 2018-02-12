const express = require('express');
const bodyParser = require('body-parser');
const pusher = require('pusher');

var pusherClient = new pusher({
    appId: '472232',
    key: 'c8aa2bd0e73e7df4c612',
    secret: '733050c3d6108065c34b',
    cluster: 'ap2',
    encrypted: true
  });

  var channel = 'private-chat-channel';

  const app = express();
  app.use(bodyParser.json());

  app.post('/send',function(req,res) {
      console.log(req.body);
      var data = {
          message : req.body.message,
          sender : req.body.sender
      }
      console.log("Sending message : " + data.message + " from " + data.sender);
      pusherClient.trigger(channel,'send',data,req.body.socketid);
      res.sendStatus(204);
  });

  app.listen(4000,'192.168.42.141',function() {
      console.log("Listening on port 4000");
  });