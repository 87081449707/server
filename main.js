console.log('Hello world')

//peer js
var peer = []
peer.server = new Peer()

peer.server.on('open', function(id) {
  document.getElementById('log').innerHTML += 'peer server id: ' + id
})

peer.server.on('error', function(error) {
  document.getElementById('log').innerHTML += 'peer server error: ' + error
})

peer.server.on('connection', function(connect) {
  
  connect.on('data', function(data) {
    
    var receive = JSON.parse(data)
    
    party.id = []
    party.id.geolocation = []
    party.id.geolocation.x = data.party.geolocation.x
    party.id.geolocation.y = data.party.geolocation.y
    
    var send = []
    
    for (var i=0; i<=server.party.length; i++) {
      connect.send(party.id[0])
    }
    
    document.getElementById('log').innerHTML += data
  })
})

// touchpad
document.addEventListener('touchstart', function(event) {
  
}, false)

// party
party = []

