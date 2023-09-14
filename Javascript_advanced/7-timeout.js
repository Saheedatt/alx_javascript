console.log('Start of the execution queue');

setTimeout(function () {
  console.log('Final code block to be executed');
}, 0);

for (let i = 1; i <= 100; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}

console.log('End of the loop printing');
