const fs = require('fs')

const os = require('os')

fs.appendFileSync('hello world.txt' , 'Hi ' + os.userInfo().username)