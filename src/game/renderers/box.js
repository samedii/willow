import React from "react";
import { Graphics } from '@inlet/react-pixi'


function Box(props) {
  return (
    <Graphics
      // preventRedraw={true}
      draw={g => {
        // clear the graphics
        g.clear()
        // start drawing

        g.beginFill(0xff00bb)
        g.drawRect(props.x, props.y, 50, 50)
        g.endFill()

      }}
    />
  );
}

export default Box;
