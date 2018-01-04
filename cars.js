const mongoose = require('mongoose');

var myDB = 'mongodb://localhost/portfolio';
mongoose.connect(myDB, function () {
  if (mongoose.connection.readyState == 1) {
    console.log('connected to mongodb');
    console.log('on ' + myDB);
  } else {
    console.log('problems connecting to mognoDB mongoose connection state is: ' + mongoose.connection.readyState);
  }
})

const carSchema = new mongoose.Schema({
  title: String,
  doors: Number,
  company: String,
})

const Car = mongoose.model("Car", carSchema)

// //- create a new one
// Car.create({title:'camry', company:'toyota', doors: 2}, function(err, data) {
//   console.log(data)
// });
//
//- shows all
Car.find({}, function(err, data) {
  console.log(data)
});
//
// Car.find({title: 'Civic'}, function(err, data) {
//   console.log(data)
// });

// Car.update({title: 'Civic'}, {$set: {title: 'Honda Type R', doors: 420}}, function(err, data) {
//   console.log(data)
// })

Car.findById('5a39ef0cea7a5510428ed85e', function (err, car) {
  // if (err) return handleError(err);

  car.set({ company: 'shitake' });
  car.save(function (err, updatedCar) {
    if (err) return handleError(err);
    console.log(updatedCar);
  });
});
