import "./style.css";
import { Container } from "react-bootstrap";

export const HomePage = () => {

     const buttonOnClick = () => {
          window.location.href = "https://store.steampowered.com/app/3210110/Beyond_the_Marion/";
     }

     return (
          <div className="home-outer">
               <div className="home-container">
                    <h1 className="home-title">WE ARE PLACEBO <br></br>ENTERTAINMENT</h1>
                    <p className="home-slogan">What started as an idea between friends became an indie game studio. We are dedicated to weaving story and style together in new, compelling ways. </p>
                    <button className="wishlist-button" onClick={buttonOnClick}>Wishlist on Steam!</button>
               </div>
          </div>

     );
};

export default HomePage;
