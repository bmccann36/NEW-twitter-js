const _ = require('lodash');

let data = []


function add (name, content) {
  data.push({ name: name, content: content });
}

function list () {
  return _.cloneDeep(data);
}

function find (properties) {
  return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
  add: add,
  list: list,
  find: find
};

var testTweets = [
{ name: 'Joe Docsreader',
content: 'Fullstack Academy is breathtaking! The instructors are just so mindblowing. #fullstacklove #codedreams' },
{ name: 'Dan Hashington',
content: 'Fullstack Academy is sweet! The instructors are just so cool. #fullstacklove #codedreams' },
{ name: 'Geoff Stackson',
content: 'Fullstack Academy is awesome! The instructors are just so cool. #fullstacklove #codedreams' },
{ name: 'Ashi Stackson',
content: 'Fullstack Academy is amazing! The instructors are just so funny. #fullstacklove #codedreams' }]




const randArrayEl = function(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
  const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
  const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
  return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
  const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
  return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
  module.exports.add( getFakeName(), getFakeTweet() );
}

add('Mina', 'test test hi hi there It\'s NOT ok.')

// data = testTweets

// console.log(data)

console.log(find(['name', 'Ashi Stackson']))
