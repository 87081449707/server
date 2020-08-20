console.log('Hello world')

//peer js
var server
var server_id

server_connect = setInterval(function(){
  server = new Peer()

  server.on('open', function(id){
    document.getElementById('log').innerHTML += '<br> peerJs server open id: ' + id
    
    server_id = id
    
    clearInterval(server_connect)
  })

  server.on('error', function(error) {
    document.getElementById('log').innerHTML += '<br> peerJs server error: ' + error
    
    clearInterval(server_connect)
  })
  
  server.on('connection', function(connect){
    connect.on('data', function(data) {
      document.getElementById('log').innerHTML += '<br> peerJs data: ' + data
      
      connect.send('hi')
      
        party_my(data)
        connect.send(party_other(data))
    })
  })
}, 2000)

// touchpad
document.addEventListener('touchstart', function(event) {
  //document.getElementById('log').innerHTML += '<br>'
}, false)

// party
var party = []

party_my = function (data){
  document.getElementById('log').innerHTML += '<br> party: ' + data
  
  for (var i = 0; i < party.length; i++){
    if (party[i].id == data.id){
      return
    }
    if (i == party.length - 1){
      party[i] = {id : data.id, geolocation : {x : data.deolocation.x, y : data.geolocation.y}}
    }
  }
}
party_other = function (data){
  var array = []
  
  for (var i = 0; i < party.length; i++){
    var distance = Math.sqrt(Math.pow(data.geolocation.x - party.geolocation.x, 2) + Math.pow(data.geolocation.y - party.geolocation.y, 2))
    
    if (distance <= party[i]){
      array.splice(i, 0, distance)
      array.length = data.number
      
      return array
    }
  }
}

var z = []

z[0] = 0
z[1] = 1

for (var i = 0; i <= z.length; i++){
  console.log(i)
  
  if (i == z.length){
    z[i] = z.length
    
    console.log(z)
  }
}