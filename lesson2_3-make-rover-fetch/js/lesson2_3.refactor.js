var int_fetch = 0;
var int_action = 0;

function set_reset_focus() {

    let obj_column_fetch = document.getElementById('column_fetch');
    let obj_column_decode = document.getElementById('column_decode');
    let obj_column_execute = document.getElementById('column_execute');

    obj_column_fetch.classList.remove('step_focus');
    obj_column_decode.classList.remove('step_focus');
    obj_column_execute.classList.remove('step_focus');

    obj_column_fetch.classList.remove('border_blink');
    obj_column_decode.classList.remove('border_blink');
    obj_column_execute.classList.remove('border_blink');
    obj_column_execute.classList.remove('border_blink_execute');

    let obj_box_decode = document.getElementById('box_decode');
    
    obj_box_decode.innerHTML = '';

    let obj_box_execute = document.getElementById('box_execute');

    obj_box_execute.innerHTML = '';

}

function set_fetch(int_id) {

    int_fetch = int_id;
    int_action = 1;
    
    set_reset_focus();

    let obj_column_decode = document.getElementById('column_decode');

    obj_column_decode.classList.add('step_focus');
    obj_column_decode.classList.add('border_blink');

    let obj_box_decode = document.getElementById('box_decode');

    obj_box_decode.innerHTML = int_id;

}

function set_decode() {

    if (int_fetch == 0) {return;}
    if (int_action != 1) {return;}

    int_action = 2;

    set_reset_focus();


    let obj_column_execute = document.getElementById('column_execute');

    obj_column_execute.classList.add('step_focus');
    obj_column_execute.classList.add('border_blink');

    let obj_box_execute = document.getElementById('box_execute');

    if (int_fetch == 1) {
        obj_box_execute.innerHTML = 'Walk';
    } else if (int_fetch == 2) {
        obj_box_execute.innerHTML = 'Turn Left';
    } else if (int_fetch == 3) {
        obj_box_execute.innerHTML = 'Turn Right';
    } else if (int_fetch == 4) {
        obj_box_execute.innerHTML = 'Pick Up';
    }

}

function set_execute() {

    if (int_action == 2) {

        let obj_column_execute = document.getElementById('column_execute');
        obj_column_execute.classList.add('border_blink_execute');

        int_action = 3;

        if (int_fetch == 1) {
            set_dog_move(int_dog_rotate);
        } else if (int_fetch == 2) {
            set_dog_turn("right");
        } else if (int_fetch == 3) {
            set_dog_turn("left");
        } else if (int_fetch == 4) {
            set_dog_pick_up();
        }

    }

}

function set_execute_end() {

    set_reset_focus();
            
    let obj_column_fetch = document.getElementById('column_fetch');
    obj_column_fetch.classList.add('border_blink');

    int_action = 0;

}


var int_grid_x_max = 6;
var int_grid_y_max = 5;

var int_grid_px = 125;

var int_bone_x = 0;
var int_bone_y = 0;

var int_dog_x = 0;
var int_dog_y = 3;

var int_dog_rotate = 0;


function animation_dog(obj_dog, int_step) {

    if (int_step < 5) {
        obj_dog.src = './img/dog-top-pose-2.png'
    } else if (int_step < 10) {
        obj_dog.src = './img/dog-top-pose-3.png'
    } else if (int_step < 15) {
        obj_dog.src = './img/dog-top-pose-2.png'
    } else if (int_step < 20) {
        obj_dog.src = './img/dog-top-pose-3.png'
    } else if (int_step < 25) {
        obj_dog.src = './img/dog-top-pose-1.png'
    }

}

function start_button() {
    
    let obj_overlay = document.getElementById('overlay');
    let obj_before_start = document.getElementById('before_start');
    
    obj_overlay.style.display = 'none';
    obj_before_start.style.display = 'none';

    set_execute_end();
    set_bone_random();
    
}

function set_bone_random() {

    int_bone_x = Math.floor(Math.random() * int_grid_x_max); 
    int_bone_y = Math.floor(Math.random() * int_grid_y_max);

    
    if (int_bone_x == 0) {int_bone_x = 3;}
    if (int_bone_y == 0) {int_bone_y = 3;}
    
    if (int_bone_x == 1 && int_bone_y == 4) {int_bone_x = 3;int_bone_y = 4;}
    
    let obj_bone = document.getElementById('bone');
    let obj_bone_reset = document.getElementById('bone_reset');
    
    obj_bone.style.gridArea = int_bone_y + ' / ' + int_bone_x + ' / auto / auto';
    obj_bone_reset.style.gridArea = int_bone_y + ' / ' + int_bone_x + ' / auto / auto';

    let obj_dog = document.getElementById('dog');

    obj_dog.src = './img/dog-top-pose-1.png';

}

function set_dog_reset() {

    let obj_dog = document.getElementById('dog');

    obj_dog.style.top = '375px';

    obj_dog.src = './img/dog-top-pose-1.png';

}

function set_dog_move(dir) {
    
    let xy = "y"
    let boundLimit = 0
    let dirOperator = "sub";
    let int_dog_pos = int_dog_y;
    switch(dir) {
      case 0:
        // code block
        break;
      case 1:
        // code block
        boundLimit = 4
        dirOperator = "add";
        break;
      case 2:
        // code block
        xy = "x";
        boundLimit = 3;
        dirOperator = "add";
        break;
      case 3:
        // code block
        xy = "x"
        break;
      default:
        // code block
    }
// unique num
    if (int_dog_y == boundLimit) {return;}


    let obj_dog = document.getElementById('dog');
    let int_dog_before = int_dog_pos * int_grid_px;
//unique operator
    if (dirOperator=="sub") {
        int_dog_pos = int_dog_pos - 1;
    } else {
        int_dog_pos = int_dog_pos + 1;
    }

    let int_dog_after = int_dog_pos * int_grid_px;

    let int_current = 0;
    let int_step = int_grid_px/25;
    let int_dog_arm = 0;

    let func_dog = setInterval(function() {

        int_current++;
    if (dirOperator=="sub") {
        int_dog_arm = int_dog_before - (int_current * int_step);
    } else {
        int_dog_arm = int_dog_before + (int_current * int_step);

    }
        animation_dog(obj_dog, int_current);

        if (int_current >= 25) {

            clearInterval(func_dog);
            set_execute_end();

            obj_dog.style.top = int_dog_after + 'px';

        }

        obj_dog.style.top = int_dog_arm + 'px';

    }, 25);

}


function set_dog_turn(dir) {

    if (int_dog_rotate == 4) {int_dog_rotate = 0;}

    let int_dog_before = int_dog_rotate * 90;
    if (dir == "left") {
        int_dog_rotate = int_dog_rotate + 1;
    } else {
        int_dog_rotate = int_dog_rotate - 1;    
    }
    

    if (int_dog_rotate == 4) {int_dog_rotate = 0;}

    let int_dog_after = int_dog_rotate * 90;

    let obj_dog = document.getElementById('dog');

    let int_step = 90/25;
    let int_current = 0;

    let func_dog = setInterval(function() {

        int_current++;
        if (dir == "left") {
            int_dog_transform = int_dog_before + (int_current * int_step);
        } else {
            int_dog_transform = int_dog_before - (int_current * int_step);
        }

        obj_dog.style.transform = 'rotate(' + int_dog_transform + 'deg)';

        animation_dog(obj_dog, int_current);

        if (int_current >= 25) {

            clearInterval(func_dog);
            set_execute_end();

        }

    }, 25);

}


function set_dog_pick_up() {

    let obj_dog = document.getElementById('dog');

    obj_dog.src = './img/dog-top-pose-4.png';

    if (int_dog_rotate == 0 && (int_bone_x-1) == int_dog_x && (int_bone_y-1) == int_dog_y) {

        let obj_overlay = document.getElementById('overlay');
        let obj_before_start = document.getElementById('before_start');
        let obj_congratulations = document.getElementById('congratulations');

        obj_overlay.style.display = 'flex';
        obj_before_start.style.display = 'none';
        obj_congratulations.style.display = 'flex';

    }

}