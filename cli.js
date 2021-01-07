var loctime = require('./App');
(async () => {
console.log(process.argv[2] +'s time: '+await loctime(process.argv[2]))
})();
