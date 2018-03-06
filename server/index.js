/*
    The Node.js server file powered by Express.
*/

const express = require('express');
const bodyParser = require('body-parser');
const pusher = require('pusher');
const mysql = require('mysql');

/*
    The pusher WebSocket client.
*/
var pusherClient = new pusher({
    appId: '472232',
    key: 'c8aa2bd0e73e7df4c612',
    secret: '733050c3d6108065c34b',
    cluster: 'ap2',
    encrypted: true
  });

var channel = 'chat-channel';

/*
    The MySQL Database client.
      * Connection established -> Execute function
      * Connection not established -> Throw err
*/
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "jan261998",
    database: "mate"
  });

  con.connect(function(err) {
    if (err) throw err;
  });

/*
    Inserts messages of type `MESSAGE` to table.
      * message : String (The message to be sent)
      * user_id : String (Username of the person who sent the message)
*/

  function insertDB(message,user_id) {
    console.log("Connected!");
    var sql = "INSERT INTO messages (message, user_id, flag, is_media) VALUES ('"+message+"', '"+user_id+"', 0, 0)";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
}

  const app = express();
  app.use(bodyParser.json());

  /*
      * Send message API
      * POST - /send/{username}
      * Parameters : message,type,sender
  */
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