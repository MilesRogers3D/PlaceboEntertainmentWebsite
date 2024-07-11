import "./style.css";
import { MemberEntry } from "./MemberEntry";
import { useEffect, useState } from "react";


export const AboutPage = () => {

     useEffect(() => {
          getData();
     }, []);

     const getData = async () => {
          const dataFetch = async () => {
               fetch('about.json', {
                    headers: {
                         'Content-Type': 'application/json',
                         'Accept': 'application/json'
                    }
               }).then(function (response) {
                    return response.json();
               }).then(function (myJson) {
                    let staff = [];
                    for(const person in myJson.staff) {
                         const item = myJson.staff[person];
                         staff.push(item);
                    }
                    setUserList(staff);
               })
          }
          dataFetch();
     }

     const [userList, setUserList] = useState([]);
     const bios = userList.map((person) => (<MemberEntry name={person.name} title={person.title} description={person.description} image={person.image}/>));

     return (
          <div className="about-outer">
               <h1 className="about-title">Our Team</h1>
               <div className="about-container">
                    {bios}
               </div>
          </div>
     );
};

export default AboutPage;
