import React from 'react'

const NewsItem = (props) => {

    let {title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div>
        <div className="card p-2 mx-2" style={{width: "24rem"}} >
            <img src={imageUrl} className="card-img-top object-cover block w-full h-[200px]" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
                <a href={newsUrl} className="btn btn-sm btn-primary">Read More</a>
                
            </div>
        </div>
      </div>
    )
  }

export default NewsItem
