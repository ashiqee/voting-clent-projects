import { useLottie } from "lottie-react";
import groovyWalkAnimation from "./walk.json";
import mobileVote from "./mobileVote.json"

const MobileVoting = () => {
    const style = {
        height: 300,
    };
    const options = {
        animationData: mobileVote,
        loop: true,
        autoplay: true,
    };

    const { View } = useLottie(options, style);

    return View;
};

export default MobileVoting;