var int_action_current = 0;
var int_step_current = 0;
var arr_selected = [];


function set_clear_focus(str_id_prefix, int_clear) {

    for (let int = 1; int <= int_clear; int++) {
        let obj_action = document.getElementById(str_id_prefix + int);

        obj_action.classList.remove('border_blink');
    }

}

function set_step() {

    let obj_action = document.getElementById('step_box_' + int_step_current);


    if (int_action_current != 0 && int_step_current != 0) {

        let str_inner = '';
        arr_selected[int_step_current] = int_action_current;

        if (int_action_current == 1) {
            str_inner = '►';
        } else if (int_action_current == 2) {
            str_inner = '◄';
        } else if (int_action_current == 3) {
            str_inner = '▼';
        } else if (int_action_current == 4) {
            str_inner = '▲';
        } else if (int_action_current == 5) {
            str_inner = '○';
        } else if (int_action_current == 6) {
            str_inner = '●';
        }

        obj_action.innerHTML = str_inner;

        int_action_current = 0;
        int_step_current = 0;

        set_clear_focus('action_box_',6);
        set_clear_focus('step_box_',20);

    } else if (int_step_current != 0) {

        obj_action.innerHTML = '';

    }

}

function set_action_focus(int_action) {

    if (bol_execute) {return;}


    set_clear_focus('action_box_',6);

    if (int_action_current == int_action) {

        int_action_current = 0;

    } else {

        int_action_current = int_action;

        let obj_action_focus = document.getElementById('action_box_' + int_action);

        obj_action_focus.classList.add('border_blink');

    }

    set_step();

}

function set_step_focus(int_step) {

    if (bol_execute) {return;}


    set_clear_focus('step_box_',20);

    if (int_step_current == int_step) {

        int_step_current = 0;

    } else {

        int_step_current = int_step;

        let obj_step_focus = document.getElementById('step_box_' + int_step);
    
        obj_step_focus.classList.add('border_blink');
    }

    set_step();

}



var int_arm_x = 0;
var int_arm_y = 0;
var bol_arm = false;

function set_arm_x(str_direction) {

    if (bol_arm) {return;}

    let obj_robot_arm = document.getElementById('robot_arm');
    let int_robot_arm_px = 65;

    if (str_direction == 'forward') {

        if (int_arm_x >= 9) {return;}

        int_robot_arm_before = int_arm_x * int_robot_arm_px;

        if (int_arm_x <= 8) {
            int_arm_x = int_arm_x + 1;
        }

        int_robot_arm_after = int_arm_x * int_robot_arm_px;

        let int_current = 0;
        let int_step = int_robot_arm_px/25;
        let int_robot_arm = 0;

        let func_arm_x_move = setInterval(function() {

            bol_arm = true;
            int_current++;

            int_robot_arm = int_robot_arm_before + (int_current * int_step);

            if (int_current > 25) {

                bol_arm = false;

                clearInterval(func_arm_x_move);

                obj_robot_arm.style.left = int_robot_arm_after + 'px';

            }

            obj_robot_arm.style.left = int_robot_arm + 'px';

        }, 25);

    } else if (str_direction == 'back') {

        if (int_arm_x == 0) {return;}

        int_robot_arm_before = int_arm_x * int_robot_arm_px;

        if (int_arm_x != 0) {
            int_arm_x = int_arm_x - 1;
        }

        int_robot_arm_after = int_arm_x * int_robot_arm_px;

        let int_current = 0;
        let int_step = int_robot_arm_px/25;
        let int_robot_arm = 0;

        let func_arm_x_move = setInterval(function() {

            bol_arm = true;
            int_current++;

            int_robot_arm = int_robot_arm_before - (int_current * int_step);

            if (int_current > 24) {

                bol_arm = false;

                clearInterval(func_arm_x_move);

                obj_robot_arm.style.left = int_robot_arm_after + 'px';

            }

            obj_robot_arm.style.left = int_robot_arm + 'px';

        }, 25);

    }

}

function set_arm_y(str_direction) {

    if (bol_arm) {return;}

    let obj_robot_arm_bar = document.getElementById('robot_arm_bar');
    let int_robot_arm_px = 64;

    if (str_direction == 'down') {

        if (int_arm_y >= 5) {return;}

        int_robot_arm_before = int_arm_y * int_robot_arm_px;

        if (int_arm_y < 5) {
            int_arm_y = int_arm_y + 1;
        }

        int_robot_arm_after = int_arm_y * int_robot_arm_px;

        
        let int_current = 0;
        let int_step = int_robot_arm_px/25;
        let int_robot_arm = 0;

        let func_arm_y_move = setInterval(function() {

            bol_arm = true;
            int_current++;

            int_robot_arm = int_robot_arm_before + (int_current * int_step);

            if (int_current > 25) {

                bol_arm = false;

                clearInterval(func_arm_y_move);

                obj_robot_arm_bar.style.minHeight = int_robot_arm_after + 'px';
                obj_robot_arm_bar.style.maxHeight = int_robot_arm_after + 'px';

            }

            obj_robot_arm_bar.style.minHeight = int_robot_arm + 'px';
            obj_robot_arm_bar.style.maxHeight = int_robot_arm + 'px';

        }, 25);

    } else if (str_direction == 'up') {

        int_robot_arm_before = int_arm_y * int_robot_arm_px;

        if (int_arm_y != 0) {
            int_arm_y = int_arm_y - 1;
        }

        int_robot_arm_after = int_arm_y * int_robot_arm_px;
        let int_current = 0;
        let int_step = int_robot_arm_px/25;
        let int_robot_arm = 0;

        let func_arm_y_move = setInterval(function() {

            bol_arm = true;
            int_current++;

            int_robot_arm = int_robot_arm_before - (int_current * int_step);

            if (int_current > 24) {

                bol_arm = false;

                clearInterval(func_arm_y_move);

                obj_robot_arm_bar.style.minHeight = int_robot_arm_after + 'px';
                obj_robot_arm_bar.style.maxHeight = int_robot_arm_after + 'px';

            }

            obj_robot_arm_bar.style.minHeight = int_robot_arm + 'px';
            obj_robot_arm_bar.style.maxHeight = int_robot_arm + 'px';

        }, 25);

    }

}


var bol_hand = false;

function set_hand(str_hand_state) {

    let obj_robot_arm_hand = document.getElementById('robot_arm_hand');

    if (str_hand_state == 'open') {

        if (bol_hand == false) {return;}

        bol_hand = false;
        let int_current = 0;

        let func_hand = setInterval(function() {

            bol_arm = true;
            int_current++;

            if (int_arm_x == 5 &&  int_arm_y == 5) {

                if (int_current == 1) {

                    obj_robot_arm_hand.setAttribute('src','./img/robotic-hand-classic-blue-arm-3.png');

                    let obj_bone = document.getElementById('bone');

                    obj_bone.style.display = 'block';

                    obj_bone.classList.remove('bone_start');
                    obj_bone.classList.add('bone_end');

                } else if (int_current == 2) {
                    obj_robot_arm_hand.setAttribute('src','./img/robotic-hand-classic-blue-arm-2.png');
                } else if (int_current == 3) {
                    obj_robot_arm_hand.setAttribute('src','./img/robotic-hand-classic-blue-arm-1.png');
    
                    bol_arm = false;

                    clearInterval(func_hand);
                    set_success();
                }

            } else {

                bol_arm = false;

                set_try_again();

                clearInterval(func_hand);

            }

        }, 400);

    } else if (str_hand_state == 'close') {

        if (bol_hand == true) {return;}

        bol_hand = true;
        let int_current = 0;

        func_hand = setInterval(function() {

            bol_arm = true;
            int_current++;

            if (int_current == 1) {
                obj_robot_arm_hand.setAttribute('src','./img/robotic-hand-classic-blue-arm-2.png');
            } else if (int_current == 2) {
                obj_robot_arm_hand.setAttribute('src','./img/robotic-hand-classic-blue-arm-3.png');
            } else if (int_current == 3 && int_arm_x == 2 &&  int_arm_y == 5) {

                obj_robot_arm_hand.setAttribute('src','./img/robotic-hand-classic-blue-arm-4.png');

                let obj_bone = document.getElementById('bone');
                obj_bone.style.display = 'none';

            }

            if (int_current >= 3) {

                bol_arm = false;
                clearInterval(func_hand);

            }

        }, 400);

    }

}


function set_success() {

    let obj_robot_dog = document.getElementById('robot_dog');

    obj_robot_dog.setAttribute('src','./img/dog-side-pose-2.png');

    let obj_robot_arm_bar = document.getElementById('robot_arm_bar');
    let int_robot_arm_px = 64;

    int_robot_arm_before = int_arm_y * int_robot_arm_px;

    int_arm_y = 0;

    int_robot_arm_after = int_arm_y * int_robot_arm_px;

    let int_current = 0;
    let int_step = int_robot_arm_before/75;
    let int_robot_arm = 0;

    let func_arm_y_move = setInterval(function() {

        bol_arm = true;
        int_current++;

        int_robot_arm = int_robot_arm_before - (int_current * int_step);

        if (int_current > 75) {

            bol_arm = false;

            clearInterval(func_arm_y_move);

            obj_robot_arm_bar.style.minHeight = int_robot_arm_after + 'px';
            obj_robot_arm_bar.style.maxHeight = int_robot_arm_after + 'px';

            set_congratulations();

        }

        obj_robot_arm_bar.style.minHeight = int_robot_arm + 'px';
        obj_robot_arm_bar.style.maxHeight = int_robot_arm + 'px';

    }, 25);

}

function set_close() {

    obj_overlay = document.getElementById('overlay');
    obj_congratulations = document.getElementById('congratulations');
    obj_try_again = document.getElementById('try_again');

    obj_overlay.style.display = 'none';
    obj_congratulations.style.display = 'none';
    obj_try_again.style.display = 'none';

}

function set_try_again() {

    obj_overlay = document.getElementById('overlay');
    obj_try_again = document.getElementById('try_again');

    obj_overlay.style.display = 'flex';
    obj_try_again.style.display = 'flex';

}

function set_congratulations() {

    obj_overlay = document.getElementById('overlay');
    obj_congratulations = document.getElementById('congratulations');

    obj_overlay.style.display = 'flex';
    obj_congratulations.style.display = 'flex';

}

function set_reset() {

    let obj_robot_arm_hand = document.getElementById('robot_arm_hand');
    obj_robot_arm_hand.setAttribute('src','./img/robotic-hand-classic-blue-arm-1.png');

    bol_hand = false;

    obj_overlay = document.getElementById('overlay');
    obj_congratulations = document.getElementById('congratulations');
    obj_try_again = document.getElementById('try_again');

    obj_overlay.style.display = 'none';
    obj_congratulations.style.display = 'none';
    obj_try_again.style.display = 'none';

    let obj_robot_dog = document.getElementById('robot_dog');

    obj_robot_dog.setAttribute('src','./img/dog-side-pose-1.png');

    let obj_robot_arm = document.getElementById('robot_arm');
    let obj_robot_arm_bar = document.getElementById('robot_arm_bar');

    int_action_current = 0;
    int_step_current = 0;

    int_arm_x = 0;
    int_arm_y = 0;

    obj_robot_arm.style.left = '0px';

    obj_robot_arm_bar.style.minHeight = '1px';
    obj_robot_arm_bar.style.maxHeight = '1px';

    let obj_bone = document.getElementById('bone');

    obj_bone.style.display = 'block';

    obj_bone.classList.remove('bone_end');
    obj_bone.classList.add('bone_start');

}

function set_clear_step() {

    if (bol_execute) {return;}


    arr_selected = [];

    set_clear_focus('action_box_',6);
    set_clear_focus('step_box_',20);
    
    for (let int = 1; int < 21; int++) {

        let obj_action = document.getElementById('step_box_' + int);
        obj_action.innerHTML = '';

    }

}



var bol_execute = false;

function set_execute() {

    if (bol_execute) {return;}
    bol_execute = true;

    set_reset();
    set_clear_focus('action_box_',6);

    let obj_execute_button = document.getElementById('execute_button');
    obj_execute_button.classList.add('border_blink');

    let int_current = 0;

    let func_execute = setInterval(function() {

        int_current++;
        set_clear_focus('step_box_',20);
        let obj_action_focus = document.getElementById('step_box_' + int_current);

        obj_action_focus.classList.add('border_blink');

        if (arr_selected[int_current] == undefined) {

            bol_execute = false;

            obj_execute_button.classList.remove('border_blink');

            set_clear_focus('step_box_',20);

            clearInterval(func_execute);

        } else if (arr_selected[int_current] == 1) {
            set_arm_x('forward');
        } else if (arr_selected[int_current] == 2) {
            set_arm_x('back');
        } else if (arr_selected[int_current] == 3) {
            set_arm_y('down');
        } else if (arr_selected[int_current] == 4) {
            set_arm_y('up');
        } else if (arr_selected[int_current] == 5) {
            set_hand('open');
        } else if (arr_selected[int_current] == 6) {
            set_hand('close');
        }

    }, 1800);

}