import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrap = styled.div`
  position: relative;
  height: 56px;
  border-bottom: 1px solid #eee;
`;
export const Logo = styled.a`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background-image: url(${logoPic});
  background-size: cover;
`;
export const Nav = styled.ul`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  background: lightblue;
`;
export const NavItem = styled.li`
  line-height: 56px;
  padding: 15px;
  font-size: 17px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
  
`;