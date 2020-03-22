import React from "react";
import { Engine, World, Bodies } from "matter-js";
import { Box, Bunny } from "./components";


export default async () => {

	let engine = Engine.create({ enableSleeping: false });
	let world = engine.world;
	world.gravity.y = 0;

	let player_box_body = Bodies.rectangle(200, 200, 20, 20, { width: 20, height: 20 });
	World.add(world, [player_box_body]);

	const entities = {
		physics: { engine: engine, world: world },
		player_box: {
			renderer: <Box />, body: player_box_body,
		},
		pauls_bunny: { x: 100, y: 200, renderer: <Bunny /> },
	}

	return entities;
};
