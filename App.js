var ray = require('x-ray')();
module.exports = async location => {
return ray(`https://time.is/${location}`, 'time').then((time)=> {return time})
}