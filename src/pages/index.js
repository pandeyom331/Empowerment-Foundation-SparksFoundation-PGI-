import React, {useState} from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Message from '../components/Message';
import Sidebar from '../components/Sidebar'
import Model from '../components/Model';

function Home() {

    const [isOpen , setIsOpen] = useState(false);

    function toggle(){
        setIsOpen(!isOpen);
    }

    const [Img, setImg] = useState(true);

    return (
        <>
          {Img && <Model setImg={setImg}/> }
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>  
          <HeroSection />
          <InfoSection {...homeObjOne}/>
          <InfoSection {...homeObjTwo}/>
          <Message />
          <InfoSection {...homeObjThree}/>
          <Footer/>
        </>
    )
}

export default Home;
