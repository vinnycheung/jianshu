import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  WriterWrapper,
  WriterItem
} from '../style'

class Writer extends PureComponent {
  render() {
    const {list} = this.props;
    return (
      <WriterWrapper>
        {
          list.map((item) => {
            return (
              <WriterItem key={item.get('id')}>
                <dt>{item.get('name')}</dt>
                <dd>写了{item.get('byte')}k字 · {item.get('like')}k喜欢</dd>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
};

export default connect(mapState, null)(Writer)