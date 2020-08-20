console.log('Hello world')

//peer js
var server
var server_id

server_connect = setInterval(function() {
  server = new Peer()

  server.on('open', function(id) {
    console.log('peerJs server open id: ' + id)

    server_id = id

    clearInterval(server_connect)
  })

  server.on('error', function(error) {
    console.log('peerJs server error: ' + error)

    clearInterval(server_connect)
  })

  server.on('connection', function(connect) {
    connect.on('data', function(data) {
      console.log('peerJs data: ' + data)

      connect.send('hi')
      connect.send(party_data(JSON.parse(data)))
    })
  })
}, 2000)

// touchpad
document.addEventListener('touchstart', function(event) {
  //document.getElementById('log').innerHTML += '<br>'
}, false)

// party
var party = []

party_data = function (data) {
  if (data.party == 'other') {
    var array = []

    for (var i = 0; i < party.length; i++) {
      var distance = Math.sqrt(Math.pow(data.geolocation.x - party.geolocation.x, 2) + Math.pow(data.geolocation.y - party.geolocation.y, 2))

      if (distance <= party[i]) {
        array.splice(i, 0, distance)
        array.length = data.number

        return array
      }
    }
  }
  if (data.party == 'my') {
    for (var i = 0; i <= party.length; i++) {
      if (i == party.length) {
        party[i] = {
          id: data.id,
          geolocation: {
            x: data.deolocation.x,
            y: data.geolocation.y
          }
        }
        break
      }
    }
  }
}