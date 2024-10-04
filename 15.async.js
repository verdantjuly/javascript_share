// 비동기 프로그래밍

function asyncTest(name, callback) {
  console.log("===== 타이머 시작 =====");
  setTimeout(() => {
    // Handler () => {} 매개변수도 없고 반환 값도 없음, 이벤트 시 사용
    callback(name);
  }, 1); // setTimeout의 단위는 ms(밀리세컨드)
  // 매개변수가 없는 콜백을 전달한다면 setTimeout에 바로 콜백을 넣어도 된다
}

function doOtherthings() {
  for (i = 0; i <= 1000; i = i + 1) {
    console.log(`${i}번째 작업  `);
  }
}

asyncTest("뷔", (name) => {
  console.log(`====== Hello ${name} =====`);
});

doOtherthings();
