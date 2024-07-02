const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, './app/(Public)/(Legal)/privacy-policy');

function replaceInFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.log(err);
    }

    const result = data
      .replace(/=\\"([^\\"]+?)\\"/g, '=&quot;$1&quot;')
      .replace(/=\\"([^\\"]+?)\\"/g, '=&quot;$1&quot;')
      .replace(/=\''([^\\']+?)\'/g, '=&apos;$1&apos;')
      .replace(/=\''([^\\']+?)\'/g, '=&apos;$1&apos;');

    fs.writeFile(filePath, result, 'utf8', (err) => {
      if (err) return console.log(err);
    });
  });
}

function traverseDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          return console.log(err);
        }
        if (stats.isDirectory()) {
          traverseDirectory(filePath);
        } else if (filePath.endsWith('.tsx')) {
          replaceInFile(filePath);
        }
      });
    });
  });
}

traverseDirectory(directoryPath);
