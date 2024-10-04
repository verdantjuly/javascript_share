// 콜백 지옥 실습
const db = [];

function saveDB(user, callback) {
  console.log(`${user.name}이 저장되었습니다.`);
  return callback(user);
}

function sendEmail(user, callback) {
  console.log(`${user.email}에 이메일을 발송하였습니다.`);
  return callback(user);
}

function getResult(user) {
  return `${user.name} 이 회원가입 완료 되었습니다.`;
}

function register(user) {
  return saveDB(user, () => {
    return sendEmail(user, () => {
      return getResult(user);
    });
  });
}

const user = {
  name: "손흥민",
  email: "soccer@love.com",
};

console.log(register(user));
