var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  port : 8889,
  database : 'Forms'
});
 
const connectionStatus = function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
      }
      console.log('connected as id ' + connection.threadId);
}
connection.connect(connectionStatus);
   
module.exports = connection;