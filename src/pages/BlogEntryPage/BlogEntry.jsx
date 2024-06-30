import "./style.css";
import { useState, useEffect} from "react";
import LoadingPage from "../LoadingPage/LoadingPage";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export const BlogEntry = ({entry_file}) => {

     useEffect(() => {
          getData();
     }, [])
     
     const [dataLoaded, setDataLoaded] = useState(false);
     const [foundMDPage, setFoundMDPage] = useState('');

     const getData = () => {
          const dataFetch = async () => {
               const markdown = (
                    await fetch(entry_file).then(response => response.text()).then(result => setFoundMDPage(result))
               );

               setDataLoaded(true);
          }

          dataFetch();
     }


     if (!dataLoaded) {
          return <LoadingPage />;
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
                         return <img {...props} className="blog-image" />
                    }
               }} rehypePlugins={[rehypeRaw]}>{foundMDPage}</Markdown>
          </div>
     )
}
