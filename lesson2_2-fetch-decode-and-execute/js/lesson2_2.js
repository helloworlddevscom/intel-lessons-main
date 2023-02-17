function set_reset() {

    let obj_graphic_fetch = document.getElementById('graphic_fetch');
    let obj_graphic_decode = document.getElementById('graphic_decode');
    let obj_graphic_execute = document.getElementById('graphic_execute');

    obj_graphic_fetch.style.display = 'none';
    obj_graphic_decode.style.display = 'none';
    obj_graphic_execute.style.display = 'none';
    
    let obj_button_fetch = document.getElementById('button_fetch');
    let obj_button_decode = document.getElementById('button_decode');
    let obj_button_execute = document.getElementById('button_execute');

    obj_button_fetch.classList.remove('button_selected');
    obj_button_decode.classList.remove('button_selected');
    obj_button_execute.classList.remove('button_selected');

}

function set_view(str_id) {

    set_reset();

    let obj_graphic_fetch = document.getElementById('graphic_' + str_id);

    obj_graphic_fetch.style.display = 'flex';

    let obj_button_fetch = document.getElementById('button_' + str_id);

    obj_button_fetch.classList.add('button_selected');

}