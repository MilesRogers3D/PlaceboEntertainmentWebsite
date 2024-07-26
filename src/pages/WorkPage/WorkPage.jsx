import { useState } from "react";
import "./style.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect } from "react";

export const WorkPage = () => {
     const [scrollPastIntro, setScrollPastIntro] = useState(false);
     const header = !scrollPastIntro ? <h1 className="work-title">Placebo entertainment proudly presents...</h1> : <></>;

     useEffect(() => {
          const onScroll = () => {
               checkScroll();
          }
          window.removeEventListener('scroll', onScroll);
          window.addEventListener('scroll', onScroll, { passive: true });
          return () => window.removeEventListener('scroll', onScroll);
     });

     const checkScroll = () => {
          let dist = window.scrollY / (document.body.offsetHeight - window.innerHeight);
          console.log(dist);
          setScrollPastIntro(dist >= 0.10);
     }
     return (
          <>
               <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1 className="work-title">Placebo entertainment proudly presents...</h1>
               </AnimationOnScroll>
               <div className="work-container"></div>
               <AnimationOnScroll animateIn="animate__fadeIn">
                    <img src="beyondthemariontitle3.png" className="work-logo"></img>
               </AnimationOnScroll>
               <div className="work-container"></div>
               <AnimationOnScroll animateIn="animate__fadeIn" className="announcement-container">
                    <h2 className="work-slogan">Coming to a galaxy near you</h2>
                    <br></br>
                    <p className="work-copy">In a galaxy not too far from our own, lies the edge of reality as we know it. The Marion, the border surrounding all existence. For millenia, it has been feared by the Sectoria Collective. After all, ships go in, and nothing comes out. Until now.</p>
                    <p className="work-copy">You are the youngest human astronaut in the history of Sectorian civilization; and have now been selected to join an elite crew tasked with journeying to and back from the Marion.</p>
                    <p className="work-copy">There’s only one problem. It appears your ship is stuck in a time loop, and you’re the only one who knows it. Through a series of puzzles, interactions with a colorful cast of alien characters, and mini-games, you’ll be challenged to save yourself and your crew before it's too late. Will you find out what’s causing the loop? Learn about the edge of reality? Make friends across the universe?</p>
                    <p className="work-copy">Anything is possible...Beyond the Marion!</p>
                    <br></br>
                    <button className="wishlist-button"><a>Wishlist on Steam!</a></button>
               </AnimationOnScroll>
          </>
     );
};

export default WorkPage;
