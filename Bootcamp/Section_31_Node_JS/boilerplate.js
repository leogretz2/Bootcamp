const fs = require('fs')

args = process.argv.slice(2)

// console.log(fs)

// ASYNC w CALLBACK
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     console.log('callback')
//     if (err) throw err;
// });

const folderName = args[0] || 'Project'

// SYNCHRONOUS
try{
    fs.mkdirSync(folderName);
    fs.writeFileSync('file.js','data')
    fs.writeFileSync(`${folderName}/index.html`,'data')
    fs.writeFileSync(`${folderName}/app.js`,'data')
    fs.writeFileSync(`${folderName}/styles.css`,'data')
} catch(e) {
    console.log("Something went wrong.")
    console.log(e)
}

// console.log('after')