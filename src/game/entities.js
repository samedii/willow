import React from "react";
import { Box, Bunny } from "./renderers";

export default async () => {

	const entities = {
		ericas_box: { x: 200,  y: 200, renderer: <Box /> },
		// pauls_box: { x: 50,  y: 50, renderer: <Box /> },
		pauls_bunny: { x: 100,  y: 200, renderer: <Bunny /> },
	}

	return entities;
};
