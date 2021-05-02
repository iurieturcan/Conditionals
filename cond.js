let integer1 = 10;
let integer2 = 7;

if(integer1 > integer2) {
  console.log('The Bigger number is ' + integer1);
}
else if(integer2 > integer1) {
  console.log('The bigger number is ' + integer2);
}

let a = 3;
let b = -7;
let c = 2;

if(a<0 && b<0 && c<0) {
  console.log("The sign is +");
}
else if (a>0 && b<0 && c<0) {
  console.log("The sign is +");
}
else if (a<0 && b>0 && c<0) {
  console.log("The sign is +");
}
else {
  console.log("The sign is -");
}

let x = 0;
let y = -1;
let z = 4;

if(y < x && y < z) {
  console.log('Output ' + z,x,y);
}

let a1 = -5;
let b1 = -2;
let c1 = -6;
let d1 = 0;
let e1 = -1;

if(a1>b1 && a1>c1 && a1>d1 && a1>e1) {
  console.log('Output ' + a1);
}
else if(b1>a1 && b1>c1 && b1>d1 && b1>e1) {
  console.log('Output ' + b1);
}
else if(c1>a1 && c1>b1 && c1>d1 && c1>e1) {
  console.log('Output ' + c1);
}
else if(d1>a1 && d1>c1 && d1>b1 && d1>e1) {
  console.log('Output ' + d1);
}
else if(e1>a1 && e1>c1 && e1>d1 && e1>b1) {
  console.log('Output ' + e1);
}

