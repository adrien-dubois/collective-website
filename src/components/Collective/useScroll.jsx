import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = (tresh = 0.1) => {
    const controls = useAnimation();
    const [element, view] = useInView({ treshold: tresh });

    if(view){
        controls.start("visible");
    } else {
        controls.start("hidden");
    }
    return [element, controls];
}