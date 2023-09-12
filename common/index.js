const fs = require('fs');
fs.readdirSync('.').forEach(function(file){
    if(file.indexOf("node_modules")<0 &&  file.indexOf(".js") > -1 && file !== "index.js" )
        module.exports[ file.replace('.js','') ] = require('./'+file);
});