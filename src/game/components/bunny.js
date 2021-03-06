import React from "react";
import { Sprite } from "@inlet/react-pixi";
import * as PIXI from "pixi.js";

const bunny = "https://i.imgur.com/IaUrttj.png";
const centerAnchor = new PIXI.Point(0.5, 0.5);

function Bunny(props) {
  return (
    <Sprite
      anchor={centerAnchor}
      angle={90}
      texture={PIXI.Texture.from(bunny)}
      {...props}
    />
  );
}

export default Bunny;
