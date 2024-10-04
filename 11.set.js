// ======== set ========

const set = new Set([1, 2, 3, 4, 5]);
console.log(set);
// 사이즈 확인
console.log(set.size);
//item 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// 존재유무
console.log(set.has(3));
console.log(set.has(6));
// 삭제
set.delete(6);
console.log(set);
// 전부 삭제
set.clear();
console.log(set);

// 순회
// forEach
set.forEach((item) => console.log(item));
// for ~ of
for (const value of set.values()) {
  console.log(value);
}
