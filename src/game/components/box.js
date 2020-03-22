import React from "react";
import { Container, Graphics } from '@inlet/react-pixi';


function Box(props) {
  const {x, y} = props.body.position;
  const {min, max} = props.body.bounds;
  const angle = props.body.angle;
  const width = (max.x - min.x) / 2;
  const height = (max.y - min.y) / 2;
  return (
    <Container
      position={[x, y]}
      rotation={angle}
      pivot={[width, height]}
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

