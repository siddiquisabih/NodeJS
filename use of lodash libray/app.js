const fs = require('fs')

const os = require('os')

const _ = require('lodash')


var a = _.isString('abc')

// if(a){

//     console.log('ajsgdjahsgd')
// }

var array = [2,4,5,65,4,3,2,1]
console.log(_.uniq(array))
// fs.appendFileSync('hello world.txt' , 'Hi ' + os.userInfo().username)