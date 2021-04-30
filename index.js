const readLine = require("readline")
const { exec } = require("child_process");
const { stderr } = require("process");

const rL = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rL.question("How much does the gas cost? \nU$ ", (gas) => {
    rL.question("\nHow much does the alcohol cost? \nU$ ", (alcohol) => {
        let restart = false
        let ratio = alcohol / gas

        if (isNaN(ratio)) {
            console.log('Insert valid values!')
            exec('clear', (error, stdout, stderr) => {
                if (error) {
                    console.log(`ERROR: ${error.message}`)
                    return
                }
                if (stderr) {
                    console.log(`STDERR: ${stderr}`)
                    return
                }
                console.log(`STDOUT: ${stdout}`)
            })
        } else {
            if (ratio > 0.7) {
                console.log('The most advantageous is gas! \n')
            } else if (ratio == 0.7) {
                console.log('Both are equally advantageous! \n')
            } else if (ratio < 0.7) {
                console.log('The most advantageous is alcohol! \n')
            }
        }

        rL.question('Would you like to calculate it again? (yes/no/y/n) \n=> ', (answer) => {
            if (answer == 'yes' || answer == 'y') {
                console.log('\nYou chose YES!')
            } else if (answer == 'no' || answer == 'n') {
                console.log('\nYou chose NO! \nQuitting... \n')
                rL.close();
            } else {
                console.log('Insert a valid value!')
            }
            
            rL.close()
        })
    })
})