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
      .map((article, index) => {
        return `
        <div id = "contaniner" style="margin:40px;">
          <div id = "title-box" style="display: flex; justify-contnet:row; align-items:center; height:60px;">
            <p style="font-size: 40px !important;">${index + 1}. <p>
            <p>${article.title}</p>
          </div>
          <div id = "author-box" style="display: flex; justify-contnet:row; align-items:center;">
            <img style="border-radius:50%; margin-right:10px;" src= '${
              article.authorImage
            }' width=30 height=30 /> 
            <a href='${
              article.authorUrl
            }' style="color:black; text-decoration:none;">
              <p>${article.authorName}</p
            </a>
          </div>       
          <a href=${article.url}>
          <img src= '${article.image}' width=300/>
          </a>  
        </div>
        `;
      })
      .join("");
    articleWritter(list);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("완료");
  });
