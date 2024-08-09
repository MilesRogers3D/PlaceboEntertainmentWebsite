import { useState } from "react";
import "./style.css";
import "animate.css/animate.min.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useEffect } from "react";

export const WorkPage = () => {
     // const [scrollPastIntro, setScrollPastIntro] = useState(false);
     // const header = !scrollPastIntro ? <h1 className="work-title">Placebo entertainment proudly presents...</h1> : <></>;

     // useEffect(() => {
     //      const onScroll = () => {
     //           checkScroll();
     //      }
     //      window.removeEventListener('scroll', onScroll);
     //      window.addEventListener('scroll', onScroll, { passive: true });
     //      return () => window.removeEventListener('scroll', onScroll);
     // });

     // const checkScroll = () => {
     //      let dist = window.scrollY / (document.body.offsetHeight - window.innerHeight);
     //      console.log(dist);
     //      setScrollPastIntro(dist >= 0.10);
     // }
     const [backgroundStyle, setCurrentBackgroundStyle] = useState();


     function onLogoEnter(e){
          setCurrentBackgroundStyle("work-outer");
     }

     function onLogoExit(e){

          setCurrentBackgroundStyle(null);
     }
     
     return (
          <div className={backgroundStyle}>
               <AnimationOnScroll animateIn="animate__fadeIn">
                    <h1 className="work-title">Placebo entertainment proudly presents...</h1>
               </AnimationOnScroll>
               <div className="work-container"></div>
               <AnimationOnScroll animateIn="animate__fadeIn" animateOut="animate__fadeOut" afterAnimatedIn={onLogoEnter} afterAnimatedOut={onLogoExit} delay={0}>
                    <div className="work-logo-container">
                         <img src="beyondthemariontitle3.png" className="work-logo"></img>
                    </div>
               </AnimationOnScroll>
               <div className="work-container"></div>
               <AnimationOnScroll animateIn="animate__fadeIn" className="announcement-container">
                    <h2 className="work-slogan">COMING TO A GALAXY NEAR YOU IN FALL 2024</h2>
                    <br></br>
                    <p className="work-copy">Bordering a collection of galaxies, far beyond our reach, lies the edge of reality as we know it. For millennia, the Sectorian Collective has feared The Marion, the barrier surrounding all existence. After all, we know nothing about The Marion. Until now.</p>
                    <p className="work-copy">You are the youngest human astronaut in the history of Sectorian civilization; and have now been selected to join an elite crew. You are tasked with journeying to and back from the Marion to answer its call from beyond.</p>
                    <p className="work-copy">Caught between reality and non-reality, your ship is stuck in a time loop, and you’re the only one aware of it. By assisting a colorful cast of aliens across a series of puzzles and mini-games, you’ll be challenged to save yourself and your crew before it's too late. Will you learn what lies beyond the edge of reality? Perhaps make friends across the universe? Or will you be caught in its loop forever?</p>
                    <p className="work-copy">Anything is possible...Beyond the Marion! </p>
                    <br></br>
                    <button className="wishlist-button"><a>Wishlist on Steam!</a></button>
               </AnimationOnScroll>
          </div>
     );
};

export default WorkPage;
