import React from 'react';
import { Button } from '../ButtonElement';
import { Column2, Img, ImgWrap, InfoContainer, InfoWrapper, InfoRow, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap} from './InfoElement';

const InfoSection = ({id, primary, dark, dark2, alt, lightText, lightBg, topLine, imgStart, headLine, darkText, description, buttonLabel, img}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                           <TextWrapper>
                               <TopLine>{topLine}</TopLine>
                               <Heading lightText={lightText}>{headLine}</Heading>
                               <Subtitle darkText={darkText}>{description}</Subtitle>
                               <BtnWrap>
                                   <Button to='home' smooth={true} exact="true" offset={-80} primary={primary ? 1 : 0} dark={dark ? 1: 0} dark2={dark2 ? 1 : 0} duration={500} spy={true}>{buttonLabel}</Button>
                               </BtnWrap>
                           </TextWrapper>
                        </Column1>
                        <Column2>
                          <ImgWrap>
                           <Img src={img.default} alt={alt}/>
                          </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
