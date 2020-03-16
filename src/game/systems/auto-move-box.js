
const AutoMoveBox = (entities, { input }) => {

//   const { payload } = setInterval( console.log('helllo') , 30000);

  const player_box = entities["player_box"];

  // console.log(Stage.getBounds());
  // console.log(player_box.calculateBounds());

  if(player_box.x<500){
    player_box.x += 1;
//     player_box.y += 1;
    } else {
      player_box.x = 0;
    }
   return entities;

};


export default AutoMoveBox;
