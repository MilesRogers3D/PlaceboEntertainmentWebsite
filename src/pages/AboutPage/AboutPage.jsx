import "./style.css";
import { MemberEntry } from "./MemberEntry";


export const AboutPage = () => {
     return (
          <div className="about-outer">
               <h1 className="about-title">Our Team</h1>
               <div className="about-container">
                    <MemberEntry></MemberEntry>
                    <MemberEntry></MemberEntry>
                    <MemberEntry></MemberEntry>
                    <MemberEntry></MemberEntry>
               </div>
          </div>
     );
};

export default AboutPage;
