// //Outpuut a prompt 
// process.stdout.write('prompt > ');


// //the stdin 'data' event fires after a user types a line 
// process.stdin.on('data', (data) => {
//     const cmd = data.toString().trim()//remove the newline


//     process.stdout.write('you typed: ' + cmd)
//     process.stdout.write('\nprompt > ')
// })

//Outpuut a prompt 
process.stdout.write('prompt > ');


//the stdin 'data' event fires after a user types a line 
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()//remove the newline
    if(cmd === 'pwd'){
        console.log('ran')
        // process.stdout.write(__dirname)
        process.stdout.write(process.cwd()) 
    } else {

    process.stdout.write('you typed: ' + cmd)
    process.stdout.write('\nprompt > ')

    }
    
})
