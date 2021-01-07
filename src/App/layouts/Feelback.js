import React, { useState, useRef} from 'react';
import Slider from 'react-slick';

import Avatar from '../../assets/images/feedback_1--img.png';


const Feelback = (props) => {
  

 return (
  <section className="section__feedback">
  <div className="container">
    <div className="slider__feedback slider-control">
      <div className="slider__feedback-item">
        <div className="feedback__item-content">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <p className="content">Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto</p>
            </div>
          </div>
        </div>
        <div className="feedback__item-information">
          <div className="information-avatar"><img src={Avatar} alt="feedback_1" /></div>
          <div className="information-block">
            <h5>TUTILE<span className="information-name">Giảm đốc phát trển sản phẩm</span></h5>
          </div>
        </div>
      </div>
      <div className="slider__feedback-item">
        <div className="feedback__item-content">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <p className="content">Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto</p>
            </div>
          </div>
        </div>
        <div className="feedback__item-information">
          <div className="information-avatar"><img src={Avatar} alt="feedback_1" /></div>
          <div className="information-block">
            <h5>TUTILE<span className="information-name">Giảm đốc phát trển sản phẩm</span></h5>
          </div>
        </div>
      </div>
      <div className="slider__feedback-item">
        <div className="feedback__item-content">
          <div className="row">
            <div className="col-sm-12 col-lg-8">
              <p className="content">Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với công nghệ cải tiến mới nhất, hảng Rohto</p>
            </div>
          </div>
        </div>
        <div className="feedback__item-information">
          <div className="information-avatar"><img src={Avatar} alt="feedback_1" /></div>
          <div className="information-block">
            <h5>TUTILE<span className="information-name">Giảm đốc phát trển sản phẩm</span></h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 );
}

export default Feelback;