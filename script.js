document.getElementById('log').innerHTML += '<br>' + 'Hello world!'
//peer js
var server
var server_id
var server_connect = setInterval(function() {
  server = new Peer()

  server.on('open', function(id) {
    document.getElementById('log').innerHTML += '<br>' + 'peerJs server open'

    server_id = id

    document.getElementById('log').innerHTML += '<br>' + 'peerJs server id: ' + server_id

    clearInterval(server_connect)
  })

  server.on('error', function(error) {
    document.getElementById('log').innerHTML += '<br>' + 'peerJs server error: ' + error

    clearInterval(server_connect)
  })

  server.on('connection', function(connect) {
    connect.on('data', function(data) {
      document.getElementById('log').innerHTML += '<br>' + 'peerJs data: ' + data

      party_data(JSON.parse(data))
      //connect.send('hi')
      //connect.send(party_data(JSON.parse(data)))
    })
  })
}, 2000)
// touchpad
document.addEventListener('touchstart', function(event) {

}, false)
// party
var party = []

party[0] = { geolocation: { x: 0, y: 0 } }
party[1] = { geolocation: { x: 1, y: 1 } }

var party_data = function(data) {
  document.getElementById('log').innerHTML += '<br>' + 'party data'

  if (data.party == 'other') {
    document.getElementById('log').innerHTML += '<br>' + 'party data other'

    var array = []

    for (var i = 0; i < party.length; i++) {
      var distance = Math.sqrt(Math.pow(data.geolocation.x - party[i].geolocation.x, 2) + Math.pow(data.geolocation.y - party[i].geolocation.y, 2))

      document.getElementById('log').innerHTML += '<br>' + 'distance: ' + distance

      array[array.length] = { distance: distance, people: 1 }
    }
    document.getElementById('log').innerHTML += '<br>' + 'array: ' + array

    return array
  }
  if (data.party == 'my') {
    for (var i = 0; i <= party.length; i++) {
      if (i == party.length) {
        party[party.length] = { id: data.id, geolocation: { x: data.deolocation.x, y: data.geolocation.y } }

        break
      }
    }
  }
}

var data = { party: 'other', id: 'id', geolocation: { x: 10, y: 10 } }
party_data(data)