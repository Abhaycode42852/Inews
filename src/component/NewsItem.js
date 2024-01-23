import React from 'react'
import image from "./news_n.jpg"

export default function NewsItem(props) {
    return (
      <div className='container my-2 d-flex justify-content-between'>
        <div className="my-3">
        <div className="card" style={{width:"18em",backgroundColor:props.mode==="dark"?"black":"white"}}>
          <div><span  className="position-absolute  start-50 translate-middle badge rounded-pill bg-danger" style={{display:"flex",justifyContent:"flex-end"}}>{props.source}</span></div>
          <img src={props.imageUrl?props.imageUrl:image} className="card-img-top" alt="..."/>
          <div className="card-body" style={{color:props.mode==="dark"?"white":"black"}}>
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.description}...</p>
            <p className='card-text'><small className='text'style={{color:props.mode==="dark"?"antiquewhite":"grey"}}>By {props.author?props.author:"anonymous"}<br/> on {new Date(props.date).toGMTString()}</small></p>
            <a href={props.newsUrl} target='_main' className="btn btn-sm btn-dark">Read More</a>
          </div>
      </div></div>
      </div>
    )
  }

