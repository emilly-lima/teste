"use client";
import * as React from "react";
import Carousel from "react-material-ui-carousel";
import Image from "next/image";

export default function TrendingSlider(props) {

  var items = [
    {
      ImageSrc: "/aviao-de-papel.png",
      ImageAlt: "imagem3",
      ImageWidth: 100,
      ImageHeight: 100,
    },
    {
      ImageSrc: "/afirmativo.png",
      ImageAlt: "imagem2",
      ImageWidth: 100,
      ImageHeight: 100,
    },
    {
      ImageSrc: "/adicionar-usuario.png",
      ImageAlt: "user add",
      ImageWidth: 100,
      ImageHeight: 100,
    },
  ];

  return (
    <Carousel
    fullHeightHover={false}
      navButtonsAlwaysVisible={true}
      navButtonsProps={{
        className: "bg-black bg-opacity-50",
      }}
      navButtonsWrapperProps={{
      }}
      autoPlay={false}
      className="w-1/2 h-auto"
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {

  return (
    <div className="shrink">
        {props.item.h2 && <h2>{props.item.h2}</h2>}

        {props.item.p && <p>{props.item.p}</p>}

        {props.item.ImageSrc && <Image
          src={props.item.ImageSrc}
          alt={props.item.ImageAlt}
          className={props.item.ImageClassName}
          width={props.item.ImageWidth}
          height={props.item.ImageHeight}
        />}
    </div>
  );
}
