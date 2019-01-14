import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {LoginWrapper, LobinBox, Input, Button} from './style';

class Login extends PureComponent {
  render() {
    const {loginState, login} = this.props;
    if(loginState) {
      return <Redirect to='/' />
    }
    return (
      <LoginWrapper>
        <LobinBox>
          <Input placeholder='账号' type='text' ref={(input) => {this.account = input}} />
          <Input placeholder='密码' type='password' ref={(input) => {this.password = input}} />
          <Button onClick={() => login(this.account, this.password)}>登录</Button>
        </LobinBox>
      </LoginWrapper>
    );
  }
}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])

});

const mapDispatch = (dispatch) => ({
  login(accountEle, passwordEle) {
    dispatch(actionCreators.login(accountEle.value, passwordEle.value));
  }
});

export default connect(mapState, mapDispatch)(Login)