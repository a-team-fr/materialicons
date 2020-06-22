// Convert _variables.scss to QML property
var fs = require('fs');

if (process.argv.length <= 2) {
    console.log("node convert.js codepoints");
    return;
}

var file = process.argv[2];

var contents = fs.readFileSync(file, 'utf8').toString();
var lines = contents.split("\n");

var icons = []

lines.forEach(function(line) {
    var match = line.split(" ");
    if (match.length === 2) {
        icons.push([ match[0] , match[1]]);
    }
});

var reservedWords = ["delete", "class", "3d_rotation", "public", "print"]

icons = icons.map(function(icon) {
    var name = icon[0];
    var value = icon[1];


    if (reservedWords.indexOf(name) >= 0) {
        name = "icon" + name;
    }

    return "    ListElement{ name:\"" + name + "\"; value:\"\\u" + value + "\"}";
    
});

console.log(icons.join("\n"));
