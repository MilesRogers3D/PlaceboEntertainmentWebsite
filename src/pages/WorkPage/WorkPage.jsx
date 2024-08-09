import { useState, useEffect, useRef } from "react";
import "./style.css";
import "animate.css/animate.min.css";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

export const WorkPage = () => {
     // const [scrollPastIntro, setScrollPastIntro] = useState(false);
     // const header = !scrollPastIntro ? <h1 className="work-title">Placebo entertainment proudly presents...</h1> : <></>;
     const ref = useRef(null);
     const {scrollYProgress} = useScroll({target: ref});

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
          if (dist > 0.55) {
               setCurrentBackgroundStyle("work-outer-visible");
               document.body.style.backgroundColor = "#EFF1F3"
          }
          else {
               document.body.style.backgroundColor = "#000D27";
               setCurrentBackgroundStyle("work-outer");
          }
     }


     const [backgroundStyle, setCurrentBackgroundStyle] = useState();

     const transition = {
          visible: { opacity: 1, transition: { duration: 1 } },
          hidden: { opacity: 0, transition: { duration: 1 } }
     };
     const transitionExtended = {
          visible: { opacity: 1, transition: { duration: 2.5 } },
          hidden: { opacity: 0, transition: { duration: 2.5 } }
     };

     const transitionMedium = {
          visible: { opacity: 1, transition: { duration: 2 } },
          hidden: { opacity: 0, transition: { duration: 2 } }
     };

     function useParallax(value, distance){
          return useTransform(value, [0,1], [-distance, distance]);
     }

     return (
          <div className={backgroundStyle}>
               <motion.div variants={transition} initial="hidden" whileInView="visible">
                    <h1 className="work-title">Placebo entertainment proudly presents...</h1>
               </motion.div>
               <div className="work-container"></div>
               <motion.div variants={transitionMedium} initial="hidden" whileInView="visible">
                    <div className="work-logo-container">
                         <img src="beyondthemariontitle3.png" className="work-logo"></img>
                    </div>
               </motion.div>
               <div className="work-container2"></div>
               <motion.div variants={transitionExtended} initial="hidden" whileInView="visible" className="announcement-container">
                    <h2 className="work-slogan">COMING TO A GALAXY NEAR YOU IN FALL 2024</h2>
                    <br></br>
                    <p className="work-copy">Bordering a collection of galaxies, far beyond our reach, lies the edge of reality as we know it. For millennia, the Sectorian Collective has feared The Marion, the barrier surrounding all existence. After all, we know nothing about The Marion. Until now.</p>
                    <p className="work-copy">You are the youngest human astronaut in the history of Sectorian civilization; and have now been selected to join an elite crew. You are tasked with journeying to and back from the Marion to answer its call from beyond.</p>
                    <p className="work-copy">Caught between reality and non-reality, your ship is stuck in a time loop, and you’re the only one aware of it. By assisting a colorful cast of aliens across a series of puzzles and mini-games, you’ll be challenged to save yourself and your crew before it's too late. Will you learn what lies beyond the edge of reality? Perhaps make friends across the universe? Or will you be caught in its loop forever?</p>
                    <p className="work-copy">Anything is possible...Beyond the Marion! </p>
                    <br></br>
                    <button className="wishlist-button"><a>Wishlist on Steam!</a></button>
               </motion.div>
          </div>

     );
};

export default WorkPage;
