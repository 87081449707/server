console.log('Hello world');

//peer js
var server = new Peer()

server.on('open', function(id) {
  document.getElementById('log').innerHTML += 'peer id: ' + id
})

server.on('error', function(error) {
  document.getElementById('log').innerHTML += 'server error: ' + error
})

server.on('data', function(data) {
  document.getElementById('log').innerHTML += data
})

server.on('connection', function(connect) {
  connect.on('data', function(data) {
    document.getElementById('log').innerHTML += data
  })
})

// touchpad
document.addEventListener('touchstart', function(event) {
  
}, false)

// party
var party = []
