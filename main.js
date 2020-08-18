console.log('Hello world')

//peer js
var server
var server_id

server_connect = setInterval(function() {
  server = new Peer()

  server.on('open', function(id) {
    document.getElementById('log').innerHTML += 'peer server id: ' + id
    
    clearInterval(server_connect)
  })

  server.on('error', function(error) {
    document.getElementById('log').innerHTML += 'peer server error: ' + error
  })
  
  server.on('connection', function(connect) {
    connect.on('data', function(data) {
      server_receive(JSON.parse(data))
    })
  })
}, 1000)

server_send = function (data){
  document.getElementById('log').innerHTML += 'send: ' + data
  
  server.send(JSON.stringify(data))
}
server_receive = function (data){
  document.getElementById('log').innerHTML += 'receive: ' + data
}

// touchpad
document.addEventListener('touchstart', function(event) {

}, false)

// party
var party

