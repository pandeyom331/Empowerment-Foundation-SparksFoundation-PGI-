import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

export const HeroContainer = styled.div`
   background:#0c0c0c;
   display:flex;
   justify-content:center;
   align-items:center;
   padding: 0 30px;
   height: 700px;
   position: realtive;
   z-index:1;

   :before{
     content:'';
     position:absolute;
     top:0;
     left:0;
     right:0;
     bottom:0;
     background:linear-gradient(
      180deg, rgba(0,0,0,0.2) 0%,
      rgba(0,0,0,0.6) 100%),
     linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
     z-index:2;
   }
`;

export const Button = styled(Link)`
border-radius:50px;
background: ${({ primary }) => (primary ? "#01BF71" : "#010606")};
white-space: nowrap;
padding:${({ big }) => (big ? "14px 48px" : "12px 30px")};
color: ${({ dark }) => (dark ? "#010606" : "#fff")};
font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
transition: all 0.2s ease-in-out;
background: ${({ primary }) => (primary ? "#fff" : "#01BF71")};
}
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  };

  @media screen and (max-width: 480px) {
    font-size: 32px;
  };
`;
export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  };

  @media screen and (max-width: 480px) {
    font-size: 18px;
  };
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
`;

export const ArrowForwad = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
