import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

class Write extends PureComponent {
  render() {
    const {loginState, login} = this.props;
    return (
      <div>写文章</div>
    );
  }
}

const mapState = (state) => ({
  loginState: state.getIn(['login', 'login'])

});

export default connect(mapState, null)(Write)