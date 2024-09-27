// 제어문
// 조건에 따라 다른 코드블럭을 실행하는 제어문에 대해 알아봅시다.

// if
const adult = 19;
let age = 15;
console.log("=============== if  ================");
if (age < adult) {
  console.log("당신은 미성년자네요");
}

age = 20;

if (age < adult) {
  console.log("당신은 성인입니다.");
}

age = 20;

// if ~ else

console.log("=============== if ~ else ================");
if (age < adult) {
  console.log("당신은 미성년자입니다");
} else {
  console.log("당신은 성인입니다");
}

// 가능하면 중첩 if문 지양
// 2단계까지만 중첩 if문 사용하기

console.log("============== 중첩 if문 ===============");

const gender = "female";
if (age > adult) {
  if (gender == "female") {
    console.log("당신은 미성년 여성입니다.");
  } else {
    console.log("당신은 미성년 남성입니다.");
  }
}

// if else if

console.log("============= if else if ===============");
let browser = "Chrome";

let browserName;
if (browser == "Chrome") {
  browserName = "크롬";
} else if (browser == "IE") {
  browserName = "인터넷 익스플로러";
} else if (browser == "Safari") {
  browserName = "사파리";
} else {
  browserName = "알려지지 않은 브라우저";
}

console.log(`브라우저 명은 ${browserName} 입니다.`);

console.log("================switch case 문==================");

browser = "IE";

switch (browser) {
  case "Chrome":
    browserName = "크롬";
    break;
  case "IE":
    browserName = "인터넷 익스플로러";
    break;
  case "Safari":
    browserName = "사파리";
    break;
  default:
    browserName = "알려지지 않은 브라우저";
}
console.log(`브라우저 명은 ${browserName} 입니다.`);

switch (browser1) {
  case "IE":
  case "Edge":
    console.log("마이크로소프트");
    break;
  case "Chrome":
    console.log("구글");
    break;
}
