var spsave = require("spsave").spsave;
var fs = require('fs');

function trimSlashes(string) {
    return string.replace(new RegExp('/', 'g'), '_');
}

var coreOptions = {
    siteUrl: process.env.SITE_URL,
};
var creds = {
    username: process.env.USER,
    password: process.env.PASSWD
};

var now = new Date().toISOString().slice(0,10);

var ref = "";
if (process.env.GITHUB_REF) {
  ref = process.env.GITHUB_REF.substr(process.env.GITHUB_REF.lastIndexOf('/') + 1);
}

var fileOptions = {
    folder: process.env.LIB_FOLDER, 
    fileName: `HPC ATMP Response.pbix`,
    fileContent: fs.readFileSync(process.env.FILE_PATH1)
};

spsave(coreOptions, creds, fileOptions)
.then(function(){
    console.log('Success');
})
.catch(function(err){
    process.exit(1);
}) 
var fileOptions = {
    folder: process.env.LIB_FOLDER, 
    fileName: `HPC Adv Package Response.pbix`,
    fileContent: fs.readFileSync(process.env.FILE_PATH2)
};

spsave(coreOptions, creds, fileOptions)
.then(function(){
    console.log('Success');
})
.catch(function(err){
    process.exit(1);
})
var fileOptions = {
    folder: process.env.LIB_FOLDER, 
    fileName: `HPC Bump_Sort_BSM Response.pbix.`,
    fileContent: fs.readFileSync(process.env.FILE_PATH3)
};

spsave(coreOptions, creds, fileOptions)
.then(function(){
    console.log('Success');
})
.catch(function(err){
    process.exit(1);
})
var fileOptions = {
    folder: process.env.LIB_FOLDER, 
    fileName: `HPC Demand Requirements.pbix`,
    fileContent: fs.readFileSync(process.env.FILE_PATH4)
};

spsave(coreOptions, creds, fileOptions)
.then(function(){
    console.log('Success');
})
.catch(function(err){
    process.exit(1);
})
var fileOptions = {
    folder: process.env.LIB_FOLDER, 
    fileName: `Substrate Response.pbix`,
    fileContent: fs.readFileSync(process.env.FILE_PATH5)
};

spsave(coreOptions, creds, fileOptions)
.then(function(){
    console.log('Success');
})
.catch(function(err){
    process.exit(1);
})    
var fileOptions = {
    folder: process.env.LIB_FOLDER, 
    fileName: `Wafer Response.pbix`,
    fileContent: fs.readFileSync(process.env.FILE_PATH6)
};

spsave(coreOptions, creds, fileOptions)
.then(function(){
    console.log('Success');
})
.catch(function(err){
    process.exit(1);
}); 
      
