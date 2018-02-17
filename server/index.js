const express = require('express');
const bodyParser = require('body-parser');
const pusher = require('pusher');
const mysql = require('mysql');

var pusherClient = new pusher({
    appId: '472232',
    key: 'c8aa2bd0e73e7df4c612',
    secret: '733050c3d6108065c34b',
    cluster: 'ap2',
    encrypted: true
  });


var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jan261998",
    database: "mate"
  });

  con.connect(function(err) {
    if (err) throw err;
  });

  function insertDB(message,user_id) {
    console.log("Connected!");
    var sql = "INSERT INTO messages (message, user_id, flag, is_media) VALUES ('"+message+"', '"+user_id+"', 0, 0)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
}

  var channel = 'chat-channel';

  const app = express();
  app.use(bodyParser.json());

  app.post('/send/:sender',function(req,res) {
      console.log(req.body);
      var data = {
          message : req.body.message,
          type : req.body.type,
          sender : req.params.sender
      }
      console.log("Sending message : " + data.message + " from " + data.sender + " of type " + data.type);
      pusherClient.trigger(channel,'send',data,req.body.socketid);
      insertDB(data.message,15315)
      res.sendStatus(204);
  });

  app.listen(4000,'192.168.42.96',function() {
      console.log("Listening on port 4000");
  });