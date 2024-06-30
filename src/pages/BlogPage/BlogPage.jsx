import "./style.css"
import { useEffect, useState } from "react";
import { BlogEntry } from "../BlogEntryPage/BlogEntry";


export const BlogPage = () => {

     useEffect(() => {
          getData();
     }, [])

     const getData = () => {
          fetch('blogposts.json', {
               headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
               }
          }).then(function (response) {
               return response.json();
          }).then(function (myJson) {
               let entries = [];
               for (const date in myJson.blog_entries) {
                    const entry = myJson.blog_entries[date];
                    entries.push(entry);
               }
               setEntryList(entries);
          })
     }


     const [entryList, setEntryList] = useState([]);

     const blogEntries = entryList.map((filename) => (<BlogEntry key={filename} entry_file={filename} />)).reverse();


     return (
          <>
               <h1 className="blog-title">DEVELOPER'S BLOG</h1>
               <div className="blog-outer">
                    <div className="blog-entry-container">
                         {blogEntries}
                    </div>
                    <div className="blog-sidebar-container">
                         <h1 className="blog-sidebar-header">Our Mission</h1>
                         <p className="blog-sidebar-paragraph">What started as an idea between friends became an indie game studio. We are dedicated to weaving story and style together in new, compelling ways. </p>
                         <h1 className="blog-sidebar-header">Our Socials</h1>
                         <a className="blog-sidebar-paragraph" href="https://x.com/placeboent">Twitter</a><br/>
                         <a href="https://www.linkedin.com/company/placeboentertainment/" className="blog-sidebar-paragraph">Linkedin</a><br/>
                         <a className="blog-sidebar-paragraph">Anywhere Else</a><br/>
                         <h1 className="blog-sidebar-header">Buy Our Stuff!</h1>
                         <p className="blog-sidebar-paragraph">Or don't. You have free will. You do have free will, right?</p>
                    </div>
               </div>
          </>

     );
};

export default BlogPage;
