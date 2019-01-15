
// function pwd() {
//         process.stdout.write(__dirname)
//         process.stdout.write('\nprompt > ')
// }

// module.exports = {
//     pwd
// }

module.exports = function() {
    process.stdout.write(__dirname)
    process.stdout.write('\nprompt > ')
}