//A small command line node app that takes a URL as a command-line argument as well as a local file path and downloads the resource to the specified path


//Module set up

const request = require('request');

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//CL input set up 
const url = process.argv[2];
const localPath = process.argv[3];




//Page Request

const pageDownloader = function (url, localPath) {

  request(url, function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the page HTML 


  //write download to file
  fs.writeFile(localPath, body, function (error) {
    console.log('File write complete!')
    error && console.log('File write error.')      //shorthand for if...error 
  }) 
    
  });

}

pageDownloader(url, localPath);


//CL input: > node fetcher.js http://www.example.edu/ ./index.html



