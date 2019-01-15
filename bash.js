
//Outpuut a prompt 
process.stdout.write('prompt > ');

const pwd = require('./pwd');
//the stdin 'data' event fires after a user types a line 
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()//remove the newline
    if(cmd === 'pwd'){
        pwd();
    } else {

    process.stdout.write('you typed: ' + cmd)
    process.stdout.write('\nprompt > ')

    }
    
})
