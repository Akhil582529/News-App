import React, { useEffect, useState} from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  

  
  const updateNews = async() => {
   let url =`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apikey=f83d7319fe524c64825c7314150f9184&page=${page}pageSize=5`;
   setLoading(true);
   let data = await fetch(url);
   let parsedData = await data.json();
   console.log(parsedData);
   setArticles(parsedData.articles)
   setTotalResults(parsedData.totalResults)
   setLoading(false)
 }

  useEffect(() => {
    updateNews();
  }, [])

const fetchMoreData = async () => {
  setPage(page+1);
  let url =`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apikey=f83d7319fe524c64825c7314150f9184&page=${page}pageSize=5`;
   setLoading(true)
   let data = await fetch(url);
   let parsedData = await data.json();
   console.log(parsedData);
   setArticles(articles.concat(parsedData.articles))
   setTotalResults(parsedData.totalResults)
};

    return (
      <>
    
      <h2 className="text-center">Top Headlines</h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !==  totalResults}
        loader={<Spinner />}
        >
      <div className="container">

        <div className="row">
          {articles
            .filter((article) => article.urlToImage)
            .map((element) => {
              return (
                <div className="col-md-4 mb-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                      ? element.description.slice(0, 88)
                      : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>

                    </>
  );
  }


News.defaultProps = {
  category: 'general',
}

News.propTypes = {
  category: PropTypes.string
}
export default News;
