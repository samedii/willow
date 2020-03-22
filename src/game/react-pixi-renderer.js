import React from "react";
import { Stage } from "@inlet/react-pixi";

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

    return <Stage options={OPTIONS} children={renderedEntities} />
};

export default ReactPixiRenderer;
