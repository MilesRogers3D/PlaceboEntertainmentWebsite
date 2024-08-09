import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


export const HiddenElement = ({children}) => {

    const transition = {
        visible: { opacity: 1, transition: {duration: 0.5}},
        hidden: {opacity: 0}
    };

    return (
        <motion.div variants={transition} initial="hidden" whileInView="visible">
            {children}
        </motion.div>
    )
}