import React, {Component} from 'react';
import {
  DetailWrapper,
  Header,
  Content
} from './style';

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>毁掉你们的不是抖音，而是你自己！</Header>
        <Content>
          <img src="https://upload-images.jianshu.io/upload_images/7994685-e928b1d3981c3e12.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp" alt=""/>
          <p>旅游圈仿佛有一个隐藏的定律——</p>
        </Content>
      </DetailWrapper>
    );
  }
}

export default Detail