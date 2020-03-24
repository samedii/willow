import { Body } from "matter-js";


var
    page_x = undefined,
    page_y = undefined;


const MoveBox = (entities, { input, time }) => {
    //-- I"m choosing to update the game state (entities) directly for the sake of brevity and simplicity.
    //-- There"s nothing stopping you from treating the game state as immutable and returning a copy..
    //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
    //-- That said, it"s probably worth considering performance implications in either case.

    // save last mouse position in order to aim abilities

    const player_box = entities.player_box;
    const { x, y } = player_box.body.position;

    const { payload } = input.find(x => x.name === "onMouseMove") || {};

    if (payload) {
        page_x = payload.pageX;
        page_y = payload.pageY;
    }

    if (!player_box.animating) {
        let mouse_x = page_x + x - 250;
        let mouse_y = page_y + y - 250;

        if (mouse_x && mouse_x) {
            Body.setAngle(player_box.body, Math.atan2(
                mouse_y - y,
                mouse_x - x,
            ));
        }
    }

    const roll_distance = 60;
    const angle = player_box.body.angle;

    if (player_box.animating) {

        if (player_box.animation === "roll_right") {

            Body.setAngle(player_box.body, angle + 0.01 * time.delta);

            if (player_box.body.angle >= player_box.target_angle) {
                Body.setAngle(player_box.body, player_box.target_angle);
                player_box.animating = false;
                player_box.animation = "";
            }

            Body.setPosition(player_box.body, {
                x: player_box.pivot_x + roll_distance * Math.cos(player_box.body.angle),
                y: player_box.pivot_y + roll_distance * Math.sin(player_box.body.angle),
            });
        }
        else if (player_box.animation === "roll_left") {

            Body.setAngle(player_box.body, angle - 0.01 * time.delta);

            if (player_box.body.angle <= player_box.target_angle) {
                Body.setAngle(player_box.body, player_box.target_angle);
                player_box.animating = false;
                player_box.animation = "";
            }

            Body.setPosition(player_box.body, {
                x: player_box.pivot_x + roll_distance * Math.cos(player_box.body.angle),
                y: player_box.pivot_y + roll_distance * Math.sin(player_box.body.angle),
            });
        }

    }
    else {

        const { payload } = input.find(x => x.name === "onKeyPress") || {};

        if (payload) {

            if (payload.key === "a") {
                player_box.animating = true;
                player_box.animation = "roll_left";

                player_box.target_angle = angle - Math.PI / 2;
                Body.setAngle(player_box.body, player_box.target_angle + Math.PI);

                player_box.pivot_x = x + roll_distance * Math.cos(player_box.target_angle);
                player_box.pivot_y = y + roll_distance * Math.sin(player_box.target_angle);
            }
            else if (payload.key === "d") {
                player_box.animating = true;
                player_box.animation = "roll_right";

                player_box.target_angle = angle + Math.PI / 2;
                Body.setAngle(player_box.body, player_box.target_angle - Math.PI);

                player_box.pivot_x = x + roll_distance * Math.cos(player_box.target_angle);
                player_box.pivot_y = y + roll_distance * Math.sin(player_box.target_angle);
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
