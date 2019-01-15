module.exports = function() {
    const fs = require('fs');
    fs.readdir('./', (err, items) => {
        if (err) {
            throw err;
        } else {
            process.stdout.write(items.join('\n'))
            process.stdout.write('prompt > ')
        }
    })
}