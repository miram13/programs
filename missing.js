var a = [4,3,2,66,99,76,65,34,21,80,7,8,2,3,1],
  count = 88;
  count = 90;
var missing = new Array();

for (var i = 1; i <= count; i++) {
  if (a.indexOf(i) == -1) {
    missing.push(i);
  }
}
console.log(missing); 
