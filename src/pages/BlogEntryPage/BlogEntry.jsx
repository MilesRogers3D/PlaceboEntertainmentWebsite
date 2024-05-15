import "./style.css";
import arrow from "./Arrow 1.svg"
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";


export const BlogEntry = () => {

     const [retrievedData, setRetrievedData] = useState('');
     const [toBlogPage, setToBlogPage] = useState(false);
     const [dataLoaded, setDataLoaded] = useState(false);

     const getData = () => {
          fetch('blogposts.json', {
               headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
               }
          }).then(function (response) {
               return response.json();
          }).then(function (myJson) {
               if (date.blogID == 0) return;
               setDataLoaded(true);
               setRetrievedData(myJson["blog_entries"][date.blogID]);
          })
     }

     let date = useParams();

     useEffect(() => {
          getData();
     }, [])

     const buildImages = () => {
          if (retrievedData == '') return '';
          let result = [];
          for (const image of retrievedData.images.values()) {
               result.push(<img src={image} className="blog-entry-image"></img>)
          }
          return result;
     }

     if(!dataLoaded){
          return <LoadingPage/>;
     }


     if (toBlogPage === true) {
          return <Navigate to="/blog" />;
     }
     return (
          <div className="blog-entry">
               <h1 className="blog-entry-date">{retrievedData.title}</h1>
               <p className="blog-entry-body">{retrievedData.body}</p>
               <div>
                    {buildImages()}
               </div>
               <button className="blog-entry-button" onClick={() => setToBlogPage(true)}><img src={arrow}></img></button>
          </div>
     )
}
