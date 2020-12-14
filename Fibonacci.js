var until = 20;
var former = 1;
var recent = 1;
var output = 0
var onconsole = "1 1";

for (i = 0; i < until-2; i++){
  output = former + recent;
  onconsole = onconsole + " " + output;
  former = recent;
  recent = output;
}

console.log(onconsole)
