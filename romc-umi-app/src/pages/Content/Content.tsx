import React from "react";
import CarouselComp from "./CarouselComp";
import MenuNav from "./MenuNav";
import MenuView from "./MenuView";
const Content:React.FC = () => {
  return(
      <div>
        <MenuView/>
        <CarouselComp/>
      </div>
  )
}
export default Content;
