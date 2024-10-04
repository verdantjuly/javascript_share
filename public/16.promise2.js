// 영화정보 가져오기 실습
// JSON JavaScript Object RotatioN의 약자
const url =
  "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";

function articleWritter(article) {
  const box = document.getElementById("movie-detail");
  box.innerHTML = article;
}

axios
  .get(url)
  .then((res) => {
    if (res.status !== 200) {
      throw new Error("요청에 실패하였습니다.");
    }

    if (res.data) {
      return res.data;
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
    const list = articleList
      .map((article) => {
        return `<h3>${article.title}</h3>
        <img src= '${article.image}' width=300 height=200 />`;
      })
      .join();
    articleWritter(list);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("완료");
  });
