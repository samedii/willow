import { Body } from "matter-js";


var
    mouse_x = undefined,
    mouse_y = undefined;


const MoveBox = (entities, { input }) => {
    //-- I"m choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There"s nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it"s probably worth considering performance implications in either case.

    // save last mouse position in order to aim abilities
    const { payload } = input.find(x => x.name === "onMouseMove") || {};

    if (payload) {
        mouse_x = payload.pageX;
        mouse_y = payload.pageY;
    }

    const player_box = entities.player_box;

    const roll_distance = 60;

    let rotation = player_box.body.angle + Math.PI;

    console.log(rotation);

    if (player_box.animating) {

        // let rotation = player_box.body.angle + Math.PI;

        // if (player_box.animation === "roll_right") {

        //     rotation += 0.001;

        //     if (rotation >= player_box.target_angle) {
        //         rotation = player_box.target_angle;
        //         player_box.animating = false;
        //         player_box.animation = "";
        //     }

        //     player_box.body.position.x = player_box.pivot_x + roll_distance * Math.cos(rotation);
        //     player_box.body.position.y = player_box.pivot_y + roll_distance * Math.sin(rotation);
        // }
        // if (player_box.animation === "roll_left") {

        //     rotation -= 0.001;

        //     if (player_box.body.angle <= player_box.target_rotation) {
        //         player_box.body.angle = player_box.target_rotation;
        //         player_box.animating = false;
        //         player_box.animation = "";
        //     }

        //     player_box.body.position.x = player_box.pivot_x + roll_distance * Math.cos(rotation);
        //     player_box.body.position.y = player_box.pivot_y + roll_distance * Math.sin(rotation);
        // }

        // player_box.body.angle = rotation % (2 * Math.PI) - Math.PI;
    }
    else {

        const { payload } = input.find(x => x.name === "onKeyPress") || {};

        player_box.body.angle = Math.atan2(
            mouse_y - player_box.body.position.y,
            mouse_x - player_box.body.position.x,
        )

        if (payload) {

            if (payload.key === "a") {
                player_box.animating = true;
                player_box.animation = "roll_left";
                player_box.target_rotation = rotation - Math.PI / 2;
                // player_box.body.angle = player_box.target_rotation + Math.PI;
                player_box.pivot_x = player_box.body.position.x + roll_distance * Math.cos(player_box.target_rotation);
                player_box.pivot_y = player_box.body.position.y + roll_distance * Math.sin(player_box.target_rotation);
            }
            else if (payload.key === "d") {
                player_box.animating = true;
                player_box.animation = "roll_right";
                player_box.target_rotation = rotation + Math.PI / 2;
                // player_box.body.angle = player_box.target_rotation - Math.PI;
                player_box.pivot_x = player_box.body.position.x + roll_distance * Math.cos(player_box.target_rotation);
                player_box.pivot_y = player_box.body.position.y + roll_distance * Math.sin(player_box.target_rotation);
            }
            else if (payload.key === "w") {
                Body.translate(player_box.body, { x: 0, y: -roll_distance });
            }
            else if (payload.key === "s") {
                Body.translate(player_box.body, { x: 0, y: roll_distance });
            }
        }



    }

    return entities;
};

export default MoveBox;
