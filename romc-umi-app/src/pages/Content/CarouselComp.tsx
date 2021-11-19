import React from "react";
import {Affix, Button, Carousel} from 'antd';
import MenuNav from "./MenuNav";

const CarouselComp: React.FC = () => {
  // @ts-ignore
  function onChange(a, b, c) {
    console.log(a, b, c);
  }

  const contentStyle:any = {
    height: '340px',
    color: '#fff',
    lineHeight: '160px',
    position: 'relative',
    textAlign: 'center',
  };
  return (
      <div style={{position: 'relative'}}>
        <Carousel autoplay afterChange={() => onChange}>
          <div>
            <h3 style={contentStyle}>
              <img src="https://dimg04.c-ctrip.com/images/0zg0f120008osz8hwAB56.jpg" alt=""/>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="https://dimg04.c-ctrip.com/images/0zg2x120008p2erviB824.jpg" alt=""/>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="https://dimg04.c-ctrip.com/images/0zg3s120008ixl3l3B37E.jpg" alt=""/>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              <img src="https://dimg04.c-ctrip.com/images/0zg6s120008e0nk4612A5.jpg" alt=""/>
            </h3>
          </div>
        </Carousel>
      </div>
  )
}
export default CarouselComp;
