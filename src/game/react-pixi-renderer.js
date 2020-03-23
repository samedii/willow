import React from "react";
import { Stage, Container } from "@inlet/react-pixi";

const OPTIONS = {
    backgroundColor: 0x1099bb,
    height: 500,
    width: 500
};

const ReactPixiRenderer = (entities, window) => {
    if (!entities || !window) return null;
    
    var renderedEntities = Object.keys(entities)
        .filter(key => entities[key].renderer)
        .map(key => {
            let child = undefined;
            let entity = entities[key];
            if (typeof entity.renderer === "object")
                child = (
                    <entity.renderer.type
                        key={key}
                        window={window}
                        {...entity}
                    />
                );
            else if (typeof entity.renderer === "function")
                child = (
                    <entity.renderer key={key} window={window} {...entity} />
                );
            return child
        });

    const { x, y } = entities.player_box.body.position;

    return (
        <Stage options={OPTIONS} >
            <Container children={renderedEntities} x={OPTIONS.width / 2} y={OPTIONS.height / 2} pivot={[x, y]}  />
        </Stage>
    );
};

export default ReactPixiRenderer;
