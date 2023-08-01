import {useRef} from "react";
import {useScroll, useTransform, motion} from "framer-motion";
import doc from "./Doc.png"

const Doc = () => {
    const divRef = useRef()
    const {scrollYProgress} = useScroll({
        target:divRef
    })

    const translateZValue = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen flex justify-center wrapper">
        <motion.div style={{
        // Use translateZValue as the value for the translateZ CSS property
        transform: `perspective(200px) translateZ(50%)`,
      }}
        ref={divRef} className=" -mt-[10vh] mx-auto rounded-md shadow-xl  shadow-gray-500">
            <img className="threed" src={doc} alt="image" />
        </motion.div>
    </div>
  )
}

export default Doc