const axios = require("axios");
async function getTop20Movies() {
  try {
    const url =
      "http://raw.githubusercontent.com/wapj/jsbackend/main/movieinfo.json";
    const res = await axios.get(url);
    console.log(res);
    const { data, status } = res;
    if (status !== 200) {
      throw new Error("요청에 실패하였습니다.");
    }
    if (!data.articleList || data.articleList.size == 0) {
      throw new Error("데이터가 없습니다.");
    }

    const movieInfos = data.articleList.map((article, index) => {
      return { title: article.title, rank: index + 1 };
    });

    for (movie of movieInfos) {
      console.log(`${movie.rank}등 : ${movie.title}`);
    }
  } catch (err) {
    console.log(err);
  }
}

getTop20Movies();
