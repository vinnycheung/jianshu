import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ListItem,
  ListInfo
} from '../style'

class List extends Component {
  render() {
    const {list} = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className='img'
                     src={item.get('imgUrl')}
                     alt=""/>
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <div className='desc'>{item.get('desc')}</div>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
};
export default connect(mapState, null)(List)