const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
     return `${acc} ${file} `;
   }, '');

   console.log(filesToString);
  });
};

module.exports.touch = (name, content) => {
  // your code here
  fs.writeFile(name, content, function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
  });
};

module.exports.mkdir = (name) => {
  // your code here
  fs.mkdir('./'+name, (err) => {
    if(err) throw err;
  });
};
