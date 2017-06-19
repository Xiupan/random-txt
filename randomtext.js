const express = require('express');
const loremIpsum = require('lorem-ipsum');
const app = express();

app.get('/lorem/:loremCount', function (req, res) {
  var loremCount = parseInt(req.params.loremCount);
  res.send('<html><body>' + loremIpsum({count: loremCount, units: 'paragraphs', format: 'html'}) + '</body></html>');
});

app.listen(3000, function(){
    console.log('The random-txt app is running!');
})
