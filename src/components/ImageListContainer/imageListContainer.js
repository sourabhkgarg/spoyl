import React from 'react';

import Image from '../../components/Image/image';
import {findPaddingBottom} from '../../helperFunction/helper';
import LikeIcon from './like';

class ImageListContainer extends React.Component {

  constructor(props) {
    super(props);
  }


  render() {

    const {ImagesList} = this.props;
    const {data, loader, pageNo} = ImagesList;

    let leftBlocks = [];
    let middleBlocks = [];
    let rightBlocks = [];


    if (data.length > 0) {

      let type = 0;
      data.forEach(item => {

        if (item.urls && item.urls.thumb) {

          let paddBottom = {
            paddingBottom: findPaddingBottom(item.width, item.height, 100) + "%"
          };

          let el = <div className="block" key={item.id}>
                      <Image src={item.urls.thumb} style={paddBottom}/>
                      <div className="flex flex_center">

                        <div className="description">
                          {item.description ? item.description : "A fallback description"}
                        </div>
                        <div className="total_likes">
                          <LikeIcon/>
                          {item.likes}
                        </div>
                      </div>
                    </div>;

          if (type === 0) {
            leftBlocks.push(el);
            type = 1;
          } else if (type === 1) {
            middleBlocks.push(el);
            type = 2;
          } else if (type === 2) {
            rightBlocks.push(el);
            type = 0;
          }
        }
      });
    }


    return (
      <div className="img_container">
        <div className="image_inner_container">
          {leftBlocks}
        </div>
        <div className="image_inner_container">
          {middleBlocks}
        </div>
        <div className="image_inner_container">
          {rightBlocks}
        </div>
      </div>

    );
  }

}


export default ImageListContainer;
