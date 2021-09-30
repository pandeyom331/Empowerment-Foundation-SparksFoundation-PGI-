import React from 'react'
import { FooterContainer, FooterWrap, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights,SocialIconLink } from './FooterElement';
import {FaInstagram, FaYoutube, FaFacebook, FaLinkedin} from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome = () => {
      scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                           Empowerment Foundation
                        </SocialLogo>
                        <WebsiteRights>Empowerment Foundation © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.facebook.com/profile.php?id=100004398076666' target='_blank' arial-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com/solo_thinker_134/' target='_blank' arial-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.youtube.com/channel/UCQPlStvldh5lX0s93nH_YAw/videos?view_as=subscriber' target='_blank' arial-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/om-anand-pandey-85612b1ab/' target='_blank' arial-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
