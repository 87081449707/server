//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let peerJs = {
  peer: undefined,
  id: undefined,
  timer: setInterval(function() {
    if (!peerJs.peer) {
      peerJs.peer = new Peer()

      peerJs.peer.on('open', function(id) {
        clearInterval(peerJs.timer)

        peerJs.peer.id = id

        console.log('peerJs.peer open')
      })
      peerJs.peer.on('error', function(error) {
        clearInterval(peerJs.timer)

        console.log('peerJs.peer error: ' + error)
      })
      peerJs.peer.on('connection', function(connect) {
        connect.on('data', function(data) {
          //connect.send(party_message(JSON.parse(data)))
        })
      })
    }
  },
    1000),
}
let party = {
  data: undefined,
  time: {
    second: undefined,
    timer: setInterval(function() {
      if (!party.time.second) {
        party.time.second = 0
      }
      if (party.time.second) {
        party.time.second += 1
      }
    },
      1000),
  },
  clean: setInterval(function() {
    for (let i = 0; i < party.data.length; i++) {
      let time = party.time.second - party.data[i].second

      if (time > 20) {
        party.data.splice(i, 1)
      }
    }
  },
    15000),
  action: {
    name: function(data) {
      if (data.name == 'list') {
        return party.list(data)
      }
      if (data.name == 'create') {
        return party.create(data)
      }
      if (data.name == 'connect') {
        return party.connect(data)
      }
    },
    list: function(data) {
      let array = {
        data: undefined,
        splice: undefined,
        slice: undefined,
      }
      let Object = {
        distance: undefined,
        people: undefined,
        create: function(distance, people) {
          let Object = {
            distance: distance,
            people: people,
          }

          return this.Object
        },
      }

      for (let i = 0; i < party.data.length; i++) {
        if (party.data) {
          Object.distance = Math.sqrt(Math.pow(data.geolocation.x - party.data[i].geolocation.x, 2) + Math.pow(data.geolocation.y - party.data[i].geolocation.y, 2))
          Object.people = party.data[i].people
        }

        for (let j = 0; j < 10; j++) {
          if (!array.data) {
            array.data = []
          }
          if (!array.data[j]) {
            array.data[j] = Object.create(Object.distance, Object.people)

            continue
          }
          if (Object.distance <= array.data[j].distance) {
            array.data.splice(j, 0, Object.create(Object.distance, Object.people))
            array.data.slice(0, 9)

            continue
          }
        }
      }

      return array.data
    },
    create: function(data) {
      for (let i = 0; i < party.data.length; i++) {
        if (party.data[i].id == data.id) {
          return
        }
      }
      for (let i = 0; i <= party.data.length; i++) {
        if (!party.data[i]) {
          party.data[i] = data

          return data
        }
        if (i == party.data.length) {
          party.data[i] = data
        }
      }
    },
    connect: function(data) {},
  }
}