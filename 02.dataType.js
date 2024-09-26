// Number

let integer = 123;
console.log(integer);
console.log("Type: ", typeof integer);
console.log("-------------------------");

let negative = -123;
console.log(negative);
console.log("Type: ", typeof negative);
console.log("-------------------------");

let double = 1.23;
console.log(double);
console.log("Type: ", typeof double);
console.log("-------------------------");

let binary = 0b10101010;
console.log(binary);
console.log("Type: ", typeof binary);
console.log("-------------------------");

let octal = 0o157;
console.log(octal);
console.log("Type: ", typeof octal);
console.log("-------------------------");

let hex = 0x7a3f;
console.log(hex);
console.log("Type: ", typeof hex);
console.log("-------------------------");

let inf = 1 / 0;
console.log(inf);
console.log("Type: ", typeof inf);
console.log("-------------------------");

let minf = -1 / 0;
console.log(minf);
console.log("Type: ", typeof minf);
console.log("-------------------------");

let nan = 1 / "hello";
console.log(nan);
console.log("Type: ", typeof nan);
console.log("-------------------------");

let num = 1 / "0";
console.log(num);
console.log("Type: ", typeof num);
console.log("-------------------------");

// String

let greetings = "안녕하세요";
console.log(greetings);

greetings = "안녕하세요";
console.log(greetings);

greetings = "'안녕하세요'";
console.log(greetings);

greetings = "안녕하세요";
console.log(greetings);

const name1 = "BTS";
greetings = `안녕하세요 
${name1}
반갑습니다.
${100}`; // 템플릿 리터럴, 줄바꿈 가능
console.log(greetings);

// Boolean

let isFree = true;
let isActivated = false;
let isOn = true;
console.log(isFree);
console.log(isActivated);
console.log(isOn);
