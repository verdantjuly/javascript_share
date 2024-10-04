// Set을 이용한 로또 추첨기

function random() {
  return Math.ceil(Math.random() * 44);
}

function lotto() {
  const result = new Set();
  while (result.size <= 5) {
    result.add(random());
  }
  return result;
}

console.log(lotto());
