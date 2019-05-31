var moment = require('moment')

console.log("Hello from Javascript!")
var datetime = moment().startOf('day').fromNow();
console.log(datetime);

var geolocation = require('geolocation')
 
geolocation.getCurrentPosition(function (err, position) {
  if (err) throw err
  console.log(position)
})

const pokemon = require('pokemon');
 
