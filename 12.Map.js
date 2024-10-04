// ======== Map ========

const map = new Map([
  ["nick", "슈가"],
  ["group", "bts"],
  ["gender", "남"],
]);
console.log(map);
// 사이즈 확인
console.log(map.size);
// 존재하는지 확인
console.log(map.has("name"));
console.log(map.has("group"));

console.log(map.get("name"));
console.log(map.get("group"));
// 추가
map.set("nation", "korea");
console.log(map);
// 삭제
map.delete("gender");
console.log(map);

// 순회
map.forEach((value, key) => console.log(key, value));
console.log(map.keys());
console.log(map.values());
console.log(map.entries());
