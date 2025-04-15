let drive = prompt('enter your age')
if (drive >= 18) {
  console.log(`Your age is ${drive}, you are old enough to drive`)
}else {
  console.log(`Your age is ${drive}, you need to wait ${18-Number(drive)} years to drive`)
}