import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style'

class List extends PureComponent {
  render() {
    const {list, getMoreList, page} = this.props;
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link key={index} to='/detail' >
                <ListItem>
                  <img className='img'
                       src={item.get('imgUrl')}
                       alt=""/>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <div className='desc'>{item.get('desc')}</div>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>查看更多</LoadMore>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
};
const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
});
export default connect(mapState, mapDispatch)(List)