export const hame = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=f14c5162205c446a8be32592a116e0c1`
  );
  const json = await response.json();
  console.log(json);
  return json;
};
export const getArticles = async topic => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${topic === "" ?"Covid - 19":topic}&apiKey=f14c5162205c446a8be32592a116e0c1`
  );
  const json = await response.json();
  console.log(json);
  console.log(response);
  return json;
};
