import React, { Component } from 'react';
import {
  HeaderWrap,
  Logo,
  Nav,
  NavItem
} from "./style";

class Header extends Component {
  render () {
    return (
      <HeaderWrap>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>Aa</NavItem>
          <NavItem className='right'>登录</NavItem>
        </Nav>
      </HeaderWrap>
    )
  }
}

export default Header;