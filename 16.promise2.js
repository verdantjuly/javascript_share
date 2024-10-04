// 영화정보 가져오기 실습
// JSON JavaScript Object RotatioN의 약자
const axios = require("axios");
const url =
  "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
axios
  .get(url)
  .then((result) => {
    if (result.status !== 200) {
      throw new Error("요청에 실패하였습니다.");
    }

    if (result.data) {
      return result.data;
    }
    throw new Error("데이터가 없습니다.");
  })
  .then((data) => {
    if (!data.articleList || data.articleList.length == 0) {
      throw new Error("데이터가 없습니다.");
    }
    return data.articleList;
  })
  .then((articleList) => {
    return articleList.map((article, index) => {
      return {
        제목: article.title,
        순위: article.index,
      };
    });
  })
  .catch((error) => new Error(error))
  .finally(() => {
    console.log("완료");
  });
