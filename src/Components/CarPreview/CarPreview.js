import './CarPreview.scss';
import React from 'react';

import matte_black from "../../assets/images/matte_black.png";
import matte_black_thumb from "../../assets/images/matte_black_thumb.png";

import hot_pink from "../../assets/images/hot_pink.png";
import hot_pink_thumb from "../../assets/images/hot_pink_thumb.png";

import flip from "../../assets/images/flip.png";
import flip_thumb from "../../assets/images/flip_thumb.png";



function CarPreview(props) {

  const [style, setStyle] = React.useState("Black");
  return (
    <>
      <div className='CarPreview'>
        <div className='CarPreview__imagecont'>
          <img className='CarPreview__image' src={
            style === "Black" ?
            matte_black
            : style === "Pink" ?
            hot_pink
            :
            flip
          }
          >  
          </img>
        </div>
        <div className='CarPreview__thumbscont'>
        <img src={matte_black_thumb}className=
              { 
                style === "Black" ? 
                'CarPreview__thumb CarPreview__thumbselected' :
                'CarPreview__thumb'
              }
              onClick={() => 
              setStyle("Black")}>           
            </img>
            
            <img src={hot_pink_thumb}className=
              { 
                style === "Pink" ? 
                'CarPreview__thumb CarPreview__thumbselected' :
                'CarPreview__thumb'
              }
              onClick={() => 
              setStyle("Pink")}>
            </img>

            <img src={flip_thumb}className=
              { 
                style === "Flip" ? 
                'CarPreview__thumb CarPreview__thumbselected' :
                'CarPreview__thumb'
              }
              onClick={() => 
              setStyle("Flip")}>
            </img>
          
        </div>
      </div>
    </>
  );
}

export default CarPreview;