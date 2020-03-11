import React from "react";
import { Box, Bunny } from "./components";

export default async () => {

	const entities = {
		player_box: { x: 200,  y: 200, width: 100, height: 100, rotation: Math.PI / 4, renderer: <Box /> },
		// pauls_box: { x: 50,  y: 50, renderer: <Box /> },
		pauls_bunny: { x: 100,  y: 200, renderer: <Bunny /> },
	}

	return entities;
};
