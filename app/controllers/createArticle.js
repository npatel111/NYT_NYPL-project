function createArticle(headline, snippet, web_url, pub_date) {
  let article = new Article(headline, snippet, web_url)
  if (pub_date[0] === "2") {
    showRecentArticle(article)
  } else {
    showOldestArticle(article)
  }

}
