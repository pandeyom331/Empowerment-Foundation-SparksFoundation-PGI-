import React from 'react'
import imgveri from "../images/logoveri.png";
import "./ModelStyles.css"
import { motion } from 'framer-motion';

function Model({setImg}) {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop'))
        {
            setImg(null);
        }
    }

    return (

        <motion.div className="backdrop" 
           onClick={handleClick}
           initial={{opacity:0}}
           animate={{opacity:1}}
        >
            <motion.img src={imgveri} initial={{y: "-100vh"}} animate={{y:0}} alt="Details"/>
        </motion.div>
    )
}

export default Model
