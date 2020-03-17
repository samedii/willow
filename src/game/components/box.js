import React from "react";
import { Container, Graphics } from '@inlet/react-pixi';


function Box(props) {
  return (
    <Container position={[props.x, props.y]} rotation={props.rotation} pivot={[props.width / 2, props.height / 2]}>
      <Graphics
        draw={g => {
          g.clear()
          g.beginFill(0xff00bb)
          g.drawRect(0, 0, props.width, props.height)
          g.endFill()
        }}
      />
    </Container>
  );
}

export default Box;

