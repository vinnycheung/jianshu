import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`;
export const HomeLeft = styled.div`
  width: 625px;
  padding-top: 30px;
  float: left;
  .banner-img {
    max-width: 100%;
  }
`;
export const HomeRight = styled.div`
  width: 240px;
  float: right;
`;

// Topic
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
`;
export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-right: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .img {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
    object-fit: cover;
  }
`;

// List
export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .img {
    width: 150px;
    height: 100px;
    border-radius: 4px;
    float: right;
  }
`;
export const ListInfo = styled.div`
  width: 460px;
  float: left;
  .title {
    line-height: 27px;
    font-weight: 600;
    font-size: 18px;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;
export const LoadMore = styled.div`
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;
// Recommend
export const RecommendWrapper = styled.div`
  margin: 30px 0;
`;
export const RecommendItem = styled.div`
  height: 50px;
  line-height: 50px;
  background: lightsalmon;
  margin-bottom: 20px;
  padding: 0 20px;
  color: #fff;
  border-radius: 4px;
  &.burlywood {
    background: burlywood;
  }
  &.tomato {
    background: tomato;
  }
`;
// Writer
export const WriterWrapper = styled.div`
  font-size: 14px;
`;
export const WriterItem = styled.dl`
  margin-bottom: 10px;
  dt {
    color: #333;
    padding: 10px 0;
  }
  dd {
    color: #999;
    font-size: 12px;
  }
`;
// ToTop
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 12px;
  text-align: center;
  border: 1px solid #ccc;
`;