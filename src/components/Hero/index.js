import React, {useState} from 'react'
import NavBar from '../Navbar';
import SideBar from '../SideBar';
import {HeroContainer, HeroContent, 
    HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
   <HeroContainer>
       <NavBar toggle={toggle}/>
       <SideBar isOpen={isOpen} toggle={toggle}/>
       <HeroContent>
           <HeroItems>
               <HeroH1>Best Jewelry Ever</HeroH1>
               <HeroP>Shine at your comfort</HeroP>
               <HeroBtn>Order Now</HeroBtn>
           </HeroItems>
       </HeroContent>
   </HeroContainer>
  );
};

export default Hero