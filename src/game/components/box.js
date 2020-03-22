import React from "react";
import { Container, Graphics } from '@inlet/react-pixi';


function Box(props) {
  const {x, y} = props.body.position;
  const angle = props.body.angle;
  const width = props.body.width;
  const height = props.body.height;
  return (
    <Container
      position={[x, y]}
      rotation={angle}
      pivot={[width / 2, height / 2]}
    >
      <Graphics
        draw={g => {
          g.clear()
          g.beginFill(0xff00bb)
          g.drawRect(0, 0, width, height)
          g.endFill()
        }}
      />
    </Container>
  );
}

export default Box;

