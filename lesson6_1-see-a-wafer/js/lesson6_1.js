function close_up() {

    let obj_step_1 = document.getElementById('step_1');
    let obj_step_2 = document.getElementById('step_2');
    let obj_back_button = document.getElementById('back_button');

    obj_step_1.style.display = 'none';
    obj_step_2.style.display = 'flex';
    obj_back_button.style.display = 'block';

}

function back_button() {

    let obj_step_1 = document.getElementById('step_1');
    let obj_step_2 = document.getElementById('step_2');
    let obj_back_button = document.getElementById('back_button');

    obj_step_1.style.display = 'flex';
    obj_step_2.style.display = 'none';
    obj_back_button.style.display = 'none';

}