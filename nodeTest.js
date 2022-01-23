let allArgs = process.argv;
let justUserArgs = allArgs.splice(2).join(' ') + " tempo";
console.log(allArgs);
console.log(justUserArgs);