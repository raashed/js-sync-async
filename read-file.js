const fs = require('fs');

const data = fs.readFileSync('./input.txt', {encoding:'utf8', flag:'r'});

console.log(data);

fs.readFile('./input.txt', {encoding:'utf8', flag:'r'}, function(err, data) {
    if(err)
        console.log(err);
    else
        console.log(data);
});

