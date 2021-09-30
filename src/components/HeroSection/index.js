import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import {
    HeroContainer,
    VideoBg,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForwad,
    ArrowRight,
    Button,
} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    function onHover() {
        setHover(!hover);
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Empowerment Foundation</HeroH1>
                <HeroP>
                    We make a living by what we get. We make a life by what we give, The
                    meaning of life is to find your gift. The purpose of life is to give
                    it away
                </HeroP>
            </HeroContent>
            <HeroBtnWrapper>
                <Button
                    to="/Donate"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                >
                    Donate {hover ? <ArrowForwad /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContainer>
    );
};

export default HeroSection;
