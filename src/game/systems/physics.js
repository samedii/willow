import { Engine, World, Bodies } from "matter-js";

var
    engine = Engine.create(),
    world = engine.world;


const Physics = (entities, { input }) => {

    const { payload } = input.find(x => x.name === "onMouseMove") || {};

    if (payload) {
        mouse_x = payload.pageX;
        mouse_y = payload.pageY;
    }

    var physicsEntities = Object.keys(entities)
        .filter(key => entities[key].physics)
        .map(key => {
            let entity = entities[key];
            let child = Bodies.rectangle(
                entity.x, entity.y, entity.width, entity.height, { isStatic: false }
            );
            
            return child
        });

    World.add(world, physicsEntities);

    return entities;
};

export default Physics;
