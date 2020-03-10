import React from "react";
import { Stage } from "react-pixi-fiber";

const OPTIONS = {
    backgroundColor: 0x1099bb,
    height: 500,
    width: 500
};

export default (entities, window) => {
    if (!entities || !window) return null;
    
    var hello = Object.keys(entities)
        .filter(key => entities[key].renderer)
        .map(key => {
            let entity = entities[key];
            if (typeof entity.renderer === "object")
                return (
                    <entity.renderer.type
                        key={key}
                        window={window}
                        {...entity}
                    />
                );
            else if (typeof entity.renderer === "function")
                return (
                    <entity.renderer key={key} window={window} {...entity} />
                );
        });

    return <Stage options={OPTIONS} children={hello} />
};