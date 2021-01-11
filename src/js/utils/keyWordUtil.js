export default function extractKeyWords(articles) {
  const result = {};
  const keywords = articles.map(article => article.keyword);

  for (let i = 0; i < keywords.length; i++) {
    const keyword = keywords[i];
    result[keyword] = result[keyword] ? result[keyword] + 1 : 1;
  }
  return Object.keys(result).sort((a, b) => result[b] - result[a]);
}
