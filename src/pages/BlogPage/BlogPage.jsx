import "./style.css"
import entryImage from "./liquid2.jpg"
import { useEffect, useState } from "react";
import LoadingPage from "../LoadingPage/LoadingPage";


export const BlogPage = () => {
     const getData = () => {
          fetch('blogposts.json', {
               headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
               }
          }).then(function (response) {
               return response.json();
          }).then(function (myJson) {
               setRetrievedData(myJson);
               setFetchComplete(true);
          })
     }

     const [retrievedData, setRetrievedData] = useState('');
     const [fetchComplete, setFetchComplete] = useState(false);


     const createEntries = () => {
          let result = [];
          for (const date in retrievedData.blog_entries) {
               const entry = retrievedData.blog_entries[date];
               const title = entry.title;
               const preview = entry.preview_body;
               result.push(blogEntry(date, title, preview));
          }
          return result;
     }

     const blogEntry = (date, title, preview) => <div className="blog-entry-box">
          <div className="blog-image-container">
               <img src={entryImage}></img>
          </div>
          <div className="blog-text-container">
               <h1 className="blog-entry-date">{title}</h1>
               <p className="blog-entry-preview">{preview} <a className="blog-entry-link" href={`/blogEntry/${date}`}>Read More</a></p>
          </div>
     </div>;

     useEffect(() => {
          getData();
     }, [])


     return (
          
          <div className="blog-outer">
               <h1 className="blog-title">DEVELOPER'S BLOG</h1>
               {createEntries()}
          </div>

     );
};

export default BlogPage;
