console.log('Hello World!');

//peer js
var peer = new Peer(['party0000000000'])

peer.on('open', function(id) {
  alert('peer js id: ' + id)
})

peer.on('error', function(error) {
  alert('peer js error: ' + error)
})

peer.on('connection', function(conn) {
  conn.on('data', function(data) {
    alert(data)
  })
})

// touchpad
document.addEventListener('touchstart', function(event) {
  console.log('server: ')
}, false)

// party
var party = []

party['all'] = []

party['i'] = []

