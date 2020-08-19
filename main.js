console.log('Hello world')

//peer js
var server
var server_id

server_connect = setInterval(function(){
  server = new Peer()

  server.on('open', function(id){
    document.getElementById('log').innerHTML += '<br> peerJs server id: ' + id
    
    server_id = id
    
    clearInterval(server_connect)
  })

  server.on('error', function(error) {
    document.getElementById('log').innerHTML += '<br> peerJs server error: ' + error
  })
  
  server.on('connection', function(connect){
    document.getElementById('log').innerHTML += '<br> prerJs connect ' + JSON.parce(connect)
    
    connect.on('data', function(data) {
      document.getElementById('log').innerHTML += '<br> peerJs data: ' + JSON.parce(data)
      
      connect.send('hi')
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
  //document.getElementById('log').innerHTML += server_id
}, false)

// party
var party = []

party_my = function (data){
  var length = party.length
  party[length] = {id : data.id, geolocation : {x : data.deolocation.x, y : data.geolocation.y}}
}
party_other = function (data){
  var distance = Math.sqrt(Math.pow(data.geolocation.x - party.geolocation.x, 2) + Math.pow(data.geolocation.y - party.geolocation.y, 2))
  var array = []
  for (var i = 0; i < party.length; i++){
    if (distance <= party[i]){
      array.splice(i, 0, distance)
      //array.length = data.length
    }
  }
}