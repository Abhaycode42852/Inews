import React, {useState} from 'react'
// import React, {useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
// import InfiniteScroll from 'react-infinite-scroll-component';

export default function News(props) {
  // const [art,setArt]= useState([])
  const [article,setArticle]= useState([])
  const [loading,setloading]= useState(false)
  const [page,setpage]= useState(0)
  const [totalResults,settotalResult]= useState(0)
  // async function updateNews(){
  //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
  //   setpage(page+1);
  //   props.setprogress(0);
  //   props.setprogress(50)
  //   let data=await fetch(url);
  //   let parsedData= await data.json();
  //   setArticle(article.concat(parsedData.articles));
  //   settotalResult(parsedData.totalResults);
  //   props.setprogress(100);
  // }
  async function componentDidMount(){
     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
     props.setprogress(0);
     let data=await fetch(url);
     let parsedData=await data.json();
     props.setprogress(50);
     setpage(page+1);
     setArticle(parsedData.articles);
    //  console.log(page)
    //  console.log(parsedData.articles)
    // settotalResult(parsedData.totalResults);    
    props.setprogress(100);
  }
    const capitalize=(word)=>{
      let lower=word.toLowerCase();
      return lower.charAt(0).toUpperCase()+lower.slice(1);}
    document.title= `${capitalize(props.category)}-INEWS`;
    // const fetchMoreData =async () => {
    //   props.setprogress(0);
    //   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}}`;
    //   props.setprogress(50)
    //   setpage(page+1);
    //   setloading(true);
    // let data=await fetch(url);
    // let parsedData= await data.json();
    // // console.log(article.concat(parsedData.articles))
    // setloading(false);
    // setArticle(article.concat(parsedData.articles));
    // props.setprogress(100);
    // };
    componentDidMount();
    // fetchMoreData();
    // useEffect(()=>{
    //   updateNews();
    //   // eslint-disable-next-line
    // },[])
    const handlePrevClick= async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22469e271caf45c1a3ea9747ae701f34&page=${page-1}&pageSize=${props.pageSize}`;
      setloading(true);
    let data=await fetch(url);
    let parsedData= await data.json();
    setpage(page+1);
    setArticle(parsedData.articles);
    setloading(false);
    //   this.setState({
    //     page: this.state.page-1,
    //     article: parsedData.articles,
    //     loading:false,
    // totalResults: await parsedData.totalResults
    //   })
    }
    const handleNextClick=async ()=>{
      let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=22469e271caf45c1a3ea9747ae701f34&page=${page+1}&pageSize=${props.pageSize}`;
      setloading(true);
      let data=await fetch(url);
      let parsedData= await data.json();
      let TotalResult=await parsedData.totalResults;
      settotalResult(TotalResult);
      if (!(this.state.page+1>Math.ceil(totalResults/props.pageSize))){
        setpage(page+1);
        setArticle(parsedData.articles);
        setloading(false);
      // this.setState({
      //   page: this.state.page+1,
      //   article: parsedData.articles,
      //   loading: false
      // })
    }
    }
    return (
      <div className='container my-3'style={{color:props.mode==="dark"?"white":"black"}}>
        <h3 className='text-center' style={{margin:"30px 0px",marginTop: "70px"}}><strong>INEWS-</strong>Top-{capitalize(props.category)}-HEADLINES </h3>
        {/* <InfiniteScroll */}
    {/* dataLength={article.length}
    style={{height:"auto",overflow:"hidden"}}
    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    // inverse={true} 
    // hasMore={article.length !== totalResults}
    // next={fetchMoreData}
    // loader={<Spinner/>}
    // endMessage={
    //   <p style={{ textAlign: "center" }}>
    //     <b>END OF ARTICLE</b>
    //   </p>>
    // } */}
  <div className="row">
          {article.map((element)=>{
            return <div className="col md-4">
            <NewsItem mode={props.mode} title={element.title?element.title.slice(0,69):""} description={element.description?element.description.slice(0,69):""} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
        </div>
          })}
        </div>
          {/* </InfiniteScroll> */}
          {loading && <Spinner/>}
          {!(loading) && <p style={{ textAlign: "center" }}>
        <b>___END OF ARTICLE___</b><br/>
        <big><b>THANKYOU ✌️</b></big>
      </p>}
        <div className="container d-flex justify-content-between">
        <button disabled={page<=1} type="button" className="btn btn-dark" onClick={handlePrevClick}>&larr; Previous</button>
        <button disabled={page+1>Math.ceil(this.state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
}
News.defaultProps={
  country:"in",
  pageSize: 9,
  category:"sports"
};
News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

