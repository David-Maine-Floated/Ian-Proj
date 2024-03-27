// const fs = require('fs');
// const path = require('path');

// const folderPath = '../public/Video'; // Path to your folder containing video files
// const outputFile = './videoFileNames.js'; // Path to the JavaScript file to be generated

// fs.readdir(folderPath, (err, files) => {
//   if (err) {
//     console.error('Error reading folder:', err);
//     return;
//   }

//   const fileNames = files.filter(file => path.extname(file).toLowerCase() === '.mp4').map(file => `'${file}'`);

//   const content = `const videoFileNames = [${fileNames.join(', ')}];\n\nexport default videoFileNames;`;

//   fs.writeFile(outputFile, content, err => {
//     if (err) {
//       console.error('Error writing JavaScript file:', err);
//       return;
//     }
//     console.log(`JavaScript file with video filenames generated at ${outputFile}`);
//   });
// });

// const fs = require('fs');
// const path = require('path');

// const folderPath = '../public/Video'; // Path to your folder containing video files
// const outputFile = './videoFileNames.js'; // Path to the JavaScript file to be generated

// fs.readdir(folderPath, (err, files) => {
//   if (err) {
//     console.error('Error reading folder:', err);
//     return;
//   }

//   const getNum = () => {
//     return Math.floor(Math.random() * 3);
//   };

//   const fileNames = files
//     .filter(file => path.extname(file).toLowerCase() === '.mp4')
//     .map(file => ({
//       path: `'${file}'`,
//       filter: `Filter: ${getNum()}`,
//     }));

//   // Format each object in the fileNames array manually
//   const formattedFileNames = fileNames.map(obj => `{ path: ${obj.path}, filter: ${obj.filter} }`);

//   const content = `const videoFileNames = [${formattedFileNames.join(', ')}];\n\nexport default videoFileNames;`;

//   fs.writeFile(outputFile, content, err => {
//     if (err) {
//       console.error('Error writing JavaScript file:', err);
//       return;
//     }
//     console.log(`JavaScript file with video filenames generated at ${outputFile}`);
//   });
// });

const fs = require('fs');
const path = require('path');

const folderPath = '../public/Video'; // Path to your folder containing video files
const outputFile = './videoFileNames.js'; // Path to the JavaScript file to be generated

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  const getNum = () => {
    return Math.floor(Math.random() * 3) + 1;
  };

  const fileNames = files
    .filter(file => path.extname(file).toLowerCase() === '.mp4')
    .map(file => ({
      path: `'${file}'`,
      filter: `'Filter ${getNum()}'`, // Ensure filter value is wrapped in single quotes
    }));

  // Format each object in the fileNames array manually
  const formattedFileNames = fileNames.map(obj => `{ path: ${obj.path}, filter: ${obj.filter} }`);

  const content = `const videoFileNames = [${formattedFileNames.join(', ')}];\n\nexport default videoFileNames;`;

  fs.writeFile(outputFile, content, err => {
    if (err) {
      console.error('Error writing JavaScript file:', err);
      return;
    }
    console.log(`JavaScript file with video filenames generated at ${outputFile}`);
  });
});