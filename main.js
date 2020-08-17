console.log('Hello world');

//peer js
var server = new Peer()

server.on('open', function(id) {
  document.getElementById('log').innerHTML += 'peer id: ' + id
})

server.on('error', function(error) {
  document.getElementById('log').innerHTML += 'server error: ' + error
})

server.on('connection', function(connect) {
  
  document.getElementById('log').innerHTML += connect
  
  connect.on('open'), function(data) {
    document.getElementById('log').innerHTML += data
  }
  
  
  
  
  connect.on('data', function(data) {
    document.getElementById('log').innerHTML += JSON.stringify(data)
    if (data == 'client') {
      
    }
    if (data == '') {
      
    }
  })
})

// touchpad
document.addEventListener('touchstart', function(event) {
  
}, false)

// party
var party = []
