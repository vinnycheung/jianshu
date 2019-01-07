import React from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
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

const Header = (props) => {
  return (
    <HeaderWrap>
      <Logo href='/'/>
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>登录</NavItem>
        <NavItem className='right'><span className='iconfont'>&#xe636;</span></NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames='slide'
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            />
          </CSSTransition>
          <span className='iconfont icon-search'>&#xe6a0;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='writing'><span className='iconfont'>&#xe655;</span>写文章</Button>
        <Button className='reg'>注册</Button>
      </Addition>
    </HeaderWrap>
  )
};

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },

    handleInputBlur() {
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);