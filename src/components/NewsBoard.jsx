import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=583f7fde50794ef1ae397a6af90006f5`
    fetch(url).then(response => response.json()).then(data => setArticles(data.articles))
  }, [category])
  return (
    <div className="d-flex flex-column">
      <h1 className="text-center py-4">Latest <span className="badge bg-danger">News</span></h1>
      <div className="margin-auto">
        {articles.map((article, index) => {
          return <NewsItem 
            key={index} 
            title={article.title} 
            description={article.description}
            src={article.urlToImage}
            url={article.url}
          />
        })}
      </div>
    </div>
  )
}

export default NewsBoard
