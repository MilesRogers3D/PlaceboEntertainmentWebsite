import "./style.css";
import arrow from "./Arrow 1.svg"
import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export const BlogEntry = () => {

     const [retrievedData, setRetrievedData] = useState();
     const [toBlogPage, setToBlogPage] = useState(false);
     const [dataLoaded, setDataLoaded] = useState(false);
     const [foundMDPage, setFoundMDPage] = useState('');

     const getData = () => {
          const dataFetch = async () => {
               const data = await (
                    await fetch('blogposts.json', {
                         headers: {
                              'Content-Type': 'application/json',
                              'Accept': 'application/json'
                         }
                    })
               ).json();

               setRetrievedData(data["blog_entries"][date.blogID]);
               let entryPage = data["blog_entries"][date.blogID].entry_file;
               const markdown = (
                    await fetch(entryPage).then(response => response.text()).then(result => setFoundMDPage(result))
               );

               setDataLoaded(true);
               // setDataLoaded(true);
          }

          dataFetch();
          // console.log(retrievedData);
          // setDataLoaded(true);
          // setRetrievedData(dataFetch());
          // // console.log(dataFetch["blog_entries"]);
          // fetch('blogposts.json', {
          //      headers: {
          //           'Content-Type': 'application/json',
          //           'Accept': 'application/json'
          //      }
          // }).then(function (response) {
          //      return response.json();
          // }).then(function (myJson) {
          //      if (date.blogID == 0) return;
          //      setDataLoaded(true);
          //      setRetrievedData(myJson["blog_entries"][date.blogID]);
          // })
     }


     let date = useParams();

     useEffect(() => {
          getData();
     }, [])

     if (!dataLoaded) {
          return <LoadingPage />;
     }

     if (toBlogPage === true) {
          return <Navigate to="/blog" />;
     }
     return (
          <div className="blog-entry">
               <Markdown remarkPlugins={[remarkGfm]} components={{
                    h1(props) {
                         return <h1 className="blog-header"{...props} />
                    },
                    p(props) {
                         return <p className="blog-paragraph"{...props} />
                    }, 
                    img(props){
                         return <img {...props} style={{ maxWidth: '100%' }} />
                    }
               }} rehypePlugins={[rehypeRaw]}>{foundMDPage}</Markdown>
               <button className="blog-entry-button" onClick={() => setToBlogPage(true)}><img src={arrow}></img></button>
          </div>
     )
}
