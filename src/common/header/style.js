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
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`;
export const NavItem = styled.li`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  .slide-enter,
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-enter-active {
    width: 240px;
  }
  .slide-exit-active {
    width: 160px;
  }
  .icon-search {
    position: absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin-top: 9px;
  margin-left: 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 200px;
    & + .icon-search {
      background: #999;
      color: #fff;
    }
  }
`;
export const SearchInfo = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  width: 200px;
  padding: 0 20px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background: #fff;
`;
export const SearchInfoTitle = styled.div`
  margin: 20px 0 15px 0;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 12px;
  cursor: pointer;
  .icon-switch {
    display: block;
    float: left;
    font-size: 12px;
    transition: all .2s ease-in;
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a`
  display: inline-block;
  line-height: 20px;
  padding: 0 5px;
  margin: 0 10px 10px 0;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`;
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;
export const Button = styled.div`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid;
  &.reg {
    color: #ec6149;
  }
  &.writing {
    background: #ec6149;
    color: #fff;
    border-color: #ec6149;
  }
`;