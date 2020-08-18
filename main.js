console.log('Hello world')

//peer js
var server
var server_id

server_connect = setInterval(function(){
  server = new Peer()

  server.on('open', function(id){
    document.getElementById('log').innerHTML += 'peerJs server id: ' + id
    
    server_id = id
    
    clearInterval(server_connect)
  })

  server.on('error', function(error) {
    document.getElementById('log').innerHTML += 'peerJs server error: ' + error
  })
  
  server.on('connection', function(connect){
    document.getElementById('log').innerHTML += JSON.parce(connect)
    
    connect.on('data', function(data) {
      server_receive(JSON.parse(data))
      
    })
  })
}, 1000)

server_send = function (id, data){
  document.getElementById('log').innerHTML += 'peerJs server send: ' + 'id: ' + id + ' ' + 'data: ' + data
  
  //server.send(JSON.stringify(data))
}
server_receive = function (data){
  document.getElementById('log').innerHTML += 'peerJs server receive: ' + data
}

// touchpad
document.addEventListener('touchstart', function(event) {
  document.getElementById('log').innerHTML += server_id
}, false)

// party
var party

