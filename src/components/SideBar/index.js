import React from 'react'
import {SideBarContainer, Icon, CloseIcon, 
    SideBarMenu, SideBarLink,
    SideBtnWrap, SideBarRoute} from "./SideBarElements";
const SideBar = ({isOpen, toggle}) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SideBarMenu>
            <SideBarLink to="/">Jewelries</SideBarLink>
            <SideBarLink to="/">Perfumes</SideBarLink>
            <SideBarLink to="/">Body Creams</SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
            <SideBarRoute to="/">Buy Now</SideBarRoute>
        </SideBtnWrap>
    </SideBarContainer>
  )
}

export default SideBar