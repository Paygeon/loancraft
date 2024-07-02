const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, './app/(Public)/(Legal)/privacy-policy');

// Function to process each file
function processFile(filePath) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}: ${err}`);
      return;
    }

    // Regular expressions to replace unescaped quotes
    const fixedContent = data
      .replace(/([^\\])"/g, '$1&quot;') // Fix double quotes not preceded by a backslash
      .replace(/([^\\])'/g, '$1&apos;'); // Fix single quotes not preceded by a backslash

    // Save the fixed content back to the file
    fs.writeFile(filePath, fixedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}: ${err}`);
        return;
      }
      console.log(`Processed file: ${filePath}`);
    });
  });
}

// Function to traverse the directory and process each file
function traverseDirectory(dirPath) {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${dirPath}: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error stating file ${filePath}: ${err}`);
          return;
        }

        if (stats.isDirectory()) {
          traverseDirectory(filePath); // Recursively process subdirectories
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
          processFile(filePath); // Process JSX/TSX files
        }
      });
    });
  });
}

// Start processing from the specified directory
traverseDirectory(directoryPath);
