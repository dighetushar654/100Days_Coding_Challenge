let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log("Right triangle pattern")
console.log(string);



let m = 5;
let string1 = "";
for (let i = 1; i <= m; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string1 += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string1 += "*";
  }
  string1 += "\n";
}

console.log("Left triangle pattern")
console.log(string1);