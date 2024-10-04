// Promise : 약속
// 콜백의 단점을 보완하기 위해 만들어진 비동기 처리 객체

// 대기(Pending) : 미완료
// 이행(fulfilled) : 완료
// 거부(reject) : 실패

// 성공 > reolve > .then
// 실패 > reject > .catch

// Promise는 체이닝이 된다.

const db = [];

function saveDB(user) {
  const oldDBlength = db.length;
  db.push(user);
  console.log(`save ${user.name} to DB `);
  return new Promise((resolve, reject) => {
    if (db.length > oldDBlength) {
      resolve(user);
    } else {
      reject(new Error(`Save DB Error : ${user.name} 저장에 실패하였습니다.`));
    }
  });
}

function sendEmail(user) {
  console.log(`send email to ${user.email}`);
  return new Promise((resolve) => {
    resolve(user);
  });
}

function getResult(user) {
  return new Promise((resolve) => {
    resolve(`success register : ${user.name}`);
  });
}

function registerByPromise(user) {
  const result = saveDB(user) // result 에는 Promise 객체가 넘어 온다.
    .then(sendEmail) // 단계적으로 끊어서 실행된다.
    .then(getResult)
    .catch((error) => new Error(error))
    .finally(() => {
      console.log("====== 완료! ======");
    });

  console.log("Promise pending... ", result);
  return result;
}

const user = {
  name: "유재석",
  email: "you@jae.com",
};

const finalResult = registerByPromise(user);
finalResult.then(console.log);
// resolve 에 console.log 가 들어간다.
