import * as constants from './constants';
import axios from 'axios';

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATE,
  topicList: result.topicList,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writerList: result.writerList
});

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/homeMock.json')
    .then((res) => {
      const result = res.data.data;
      dispatch(changeHomeData(result))
    });
  }
};