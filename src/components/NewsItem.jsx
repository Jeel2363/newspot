import React from 'react';

const NewsItem = ({ title, description, src, url }) => {
    return (
      <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: "345px" }}>
        <img src={src ? src : "https://t4.ftcdn.net/jpg/02/09/53/11/360_F_209531103_vL5MaF5fWcdpVcXk5yREBk3KMcXE0X7m.jpg"} style={{height: "200px", width: "325px"}} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title.slice(0,50)}</h5>
          <p className="card-text" style={{ height: '72px'}}>{description ? description.slice(0,90) : "news description non available...news description non available...news description non available..."}</p>
          <a href={url} className="btn btn-primary">Read more</a>
        </div>
      </div>
    )
  }
  
  export default NewsItem;