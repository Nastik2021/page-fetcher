//should take a URL as a command-line arg as well as a local file path and download the resource to the specified path 

const request = require('request'); //installed -request- library
const fs = require('fs');

//get command line args
const args = process.argv.slice(2);

const url = args[0];
const filetoSave = args[1];


request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    return;
  }

  
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  // easiest way to write files in Node.js is to use the following function:
  // const content = 'Some content!'

  fs.writeFile(filetoSave, body, error => {
    if (error) {
      console.log("File cannot be created");
      return;

    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${filetoSave}`);
    }
  //file written successfully
  });
});
