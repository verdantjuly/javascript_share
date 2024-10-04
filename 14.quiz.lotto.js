// Array를 이용한 로또 추첨기

function random() {
  return Math.ceil(Math.random() * 44);
}

function lotto() {
  const result = [];
  while (result.length <= 5) {
    let number = random();
    if (!result.includes(number)) {
      result.push(random());
    }
  }
  return result;
}

console.log(lotto());
