let x = 99999999999999999;
let y = BigInt("9999999999999999");
document.getElementById("demo1").innerHTML= x +"<br>"+ y;
let a = 9007199254740995n;
let b = 9007199254740995n;
let z = a* b;
document.getElementById("demo2").innerHTML= a +"*"+ b + "=" + z;
let A = 9007199254740995n;
let B = 9007199254740995n;
let C = A/B;
document.getElementById("demo3").innerHTML=C;
let X = 5n;
let Y = 2;
let Z= x/Y;
document.getElementById("demo4").innerHTML=Z;
let hex = 0x1080;
let oct= 0o1245;
let bin= 0b100101010101001010101010101010101010101010;
document.getElementById("demo5").innerHTML=hex;
document.getElementById('demo6').innerHTML=oct;
document.getElementById('demo8').innerHTML=bin;