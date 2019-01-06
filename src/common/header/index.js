import React, { Component } from 'react';
import {
  HeaderWrap,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from "./style";

class Header extends Component {
  render () {
    return (
      <HeaderWrap>
        <Logo href='/' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'><span className='iconfont'>&#xe636;</span></NavItem>
          <SearchWrapper>
            <NavSearch></NavSearch>
            <span className='iconfont'>&#xe6a0;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writing'><span className='iconfont'>&#xe655;</span>写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrap>
    )
  }
}

export default Header;