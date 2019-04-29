const mongoose = require('mongoose');
const Cele = require('../model/celebrity');

mongoose.connect('mongodb://localhost/lab-mongoose-movies');

const celebrity = [
  {
    name: "Jason Staham",
    occupation: "actor",
    catchPhrase: "Whatever you do, do it to the extreme."
  },

  {
    name: "Jackie Chan",
    occupation: "actor",
    catchPhrase: "Do not let circumstances control you. You change your circumstances.."
  },

  {
    name: "Jean Claude Vann-Damme",
    occupation: "actor",
    catchPhrase: "Whatever you do, do it to the extreme."
  },
]

Cele.create(celebrity, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebrity.length} list`)
  mongoose.connection.close();
});
