import {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";
import doc from "./Doc.png"

const Doc = () => {
    const divRef = useRef()
    const {scrollYProgress} = useScroll({
        target:divRef,
        offset:["start end", "end end"]
    })

    const transformPerspective = useTransform(scrollYProgress, [0, 1], ["500px", "500px"]);
    // const originY = useTransform(scrollYProgress, [0, 1], [0, 1]);
    // const rotate = useTransform(scrollYProgress, [0, 1], [0, 1]);
    // const rotateX = useTransform(scrollYProgress, [0.3, 0.6, 1], ["50deg", "7deg", "0deg"]);
    // const rotateY = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

    const scaleY = useTransform(scrollYProgress, [0, 1], [0.9, 1]);


  return (
    <div className="flex justify-center container -mt-[30vh] md:-mt-[10vh] pb-[10vh]">
        <motion.div 
       style={{transformPerspective}}
        transition={{duration:0.5}}
        ref={divRef} className=" mx-auto rounded-md overflow-hidden">
            <motion.img  
            style={{
          // rotateX,
          transformOrigin:"center",
          // scale:"95%",
          // rotateY
          scaleY
        }} 
            className="w-full shadow-md shadow-gray-400" src={doc} alt="image" />
        </motion.div>
    </div>
  )
}

export default Doc