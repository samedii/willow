

const MoveBox = (entities, { input }) => {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  const { payload } = input.find(x => x.name === "onMouseDown") || {};

  if (payload) {
    const ericas_box = entities["ericas_box"];

    ericas_box.x = payload.pageX;
    ericas_box.y = payload.pageY;
  }

  return entities;
};

export { MoveBox };
