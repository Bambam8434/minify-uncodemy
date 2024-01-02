const fs = require('fs');
const path = require('path');
const Minimize = require('minimize');

// Specify the directory containing your HTML files
const inputDirectory = __dirname;

// Minify HTML files in the same directory
fs.readdirSync(inputDirectory).forEach(file => {
  if (file.endsWith('.html')) {
    const filePath = path.join(inputDirectory, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove HTML comments
    content = content.replace(/<!--[\s\S]*?-->/g, '');

    // Create a new Minimize instance
    const minimize = new Minimize();

    // Minify the HTML content
    const minifiedContent = minimize.parse(content);

    fs.writeFileSync(filePath, minifiedContent, 'utf8');

    console.log(`Minimized: ${file}`);
  }
});

console.log('Minification completed.');
