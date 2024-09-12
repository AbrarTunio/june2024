// User is asked about the age of child
// and computer will respond with age of father
// who is always 20 year older than child

// let childAge = Number(prompt("What is your age? "));

// fatherAge = childAge + 20;

// document.body.innerHTML =
//   "<h1> Your father is " + fatherAge + " years old </h1>";

fatherAge = Number(prompt("Enter your father's age !"));

childAge = fatherAge - 20;

document.body.innerHTML = "<h1> Your age is " + childAge + " years </h1>";
