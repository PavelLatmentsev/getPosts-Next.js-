import Image from "next/image";
import Img from "@/public/wallpaper.jpg"
import { motion } from "framer-motion";

const Wallpaper = () => {
    return ( <div className="container">
        <h1>Наше изображение</h1>
        <motion.div initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 5 }}>
        <Image 
        src={Img}
        alt="Office"
/>
        </motion.div>

    </div> );
}
 
export default Wallpaper;