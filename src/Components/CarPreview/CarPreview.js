import './CarPreview.scss';
import React from 'react';

import matte_black from "../../assets/images/matte_black.png";
import matte_black_thumb from "../../assets/images/matte_black_thumb.png";

import hot_pink from "../../assets/images/hot_pink.png";
import hot_pink_thumb from "../../assets/images/hot_pink_thumb.png";

import flip from "../../assets/images/flip.png";
import flip_thumb from "../../assets/images/flip_thumb.png";

import blue from "../../assets/images/blue.png";
import blue_thumb from "../../assets/images/blue_thumb.png";

import green from "../../assets/images/green.png";
import green_thumb from "../../assets/images/green_thumb.png";

import orange from "../../assets/images/orange.png";
import orange_thumb from "../../assets/images/orange_thumb.png";

import purple from "../../assets/images/purple.png";
import purple_thumb from "../../assets/images/purple_thumb.png";

import yellow from "../../assets/images/yellow.png";
import yellow_thumb from "../../assets/images/yellow_thumb.png";

function CarPreview(props) {

  const [style, setStyle] = React.useState("Black");
  return (
    <>
      <div className='CarPreview'>
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
            
            <img src={blue_thumb}className=
              { 
                style === "Blue" ? 
                'CarPreview__thumb CarPreview__thumbselected' :
                'CarPreview__thumb'
              }
              onClick={() => 
              setStyle("Blue")}>
            </img>

            <img src={green_thumb}className=
              { 
                style === "Green" ? 
                'CarPreview__thumb CarPreview__thumbselected' :
                'CarPreview__thumb'
              }
              onClick={() => 
              setStyle("Green")}>
            </img>

            <img src={orange_thumb}className=
              { 
                style === "Orange" ? 
                'CarPreview__thumb CarPreview__thumbselected' :
                'CarPreview__thumb'
              }
              onClick={() => 
              setStyle("Orange")}>
            </img>
          
            <img src={purple_thumb}className=
              { 
                style === "Purple" ? 
                'CarPreview__thumb CarPreview__thumbselected' :
                'CarPreview__thumb'
              }
              onClick={() => 
              setStyle("Purple")}>
            </img>

            <img src={yellow_thumb}className=
              { 
                style === "Yellow" ? 
                'CarPreview__thumb CarPreview__thumbselected' :
                'CarPreview__thumb'
              }
              onClick={() => 
              setStyle("Yellow")}>
            </img>

        </div>
        <div className='CarPreview__imagecont'>
          <img className='CarPreview__image' src={
            style === "Black" ?
            matte_black
            : style === "Pink" ?
            hot_pink 
            : style === "Flip" ?
            flip
            : style === "Blue" ?
            blue
            : style === "Green" ?
            green
            : style === "Orange" ?
            orange
            : style === "Purple" ?
            purple
            : 
            yellow
          }
          >  
          </img>
        </div>

      </div>
    </>
  );
}

export default CarPreview;