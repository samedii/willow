import { Engine } from "matter-js";


const Physics = (entities, { input, time }) => {

    let engine = entities.physics.engine;

    Engine.update(engine, time.delta);

    // var physicsEntities = Object.keys(entities)
    //     .filter(key => entities[key].physics)
    //     .map(key => {
    //         let entity = entities[key];
    //         let child = Bodies.rectangle(
    //             entity.x, entity.y, entity.width, entity.height, { isStatic: false }
    //         );
            
    //         return child
    //     });

    // World.add(world, physicsEntities);

    return entities;
};

export default Physics;
