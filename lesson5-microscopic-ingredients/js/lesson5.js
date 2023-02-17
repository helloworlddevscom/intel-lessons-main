var bol_disable = false;
var int_view = 1;


function ingredient(int_option) {

    if (bol_disable) {return;}


    let obj_box = document.getElementById('box');
    let obj_box_label = document.getElementById('box_label');
    let obj_box_message = document.getElementById('box_message');
    let obj_img_activity = document.getElementById('img_activity');


    if (int_option === 1 && int_view === 1) {

        obj_box_label.innerHTML = 'Silicon';
        obj_box_message.innerHTML = 'Wafers cut from a block of silicon are a primary ingredient of microprocessors. Found in common beach sand, silicon is a semiconductor of electricity. Adding certain materials to silicon can alter its properties to make it either a conductor or insulator.';

        obj_img_activity.classList.remove('graphic_img_silhouette');

        obj_box.style.display = 'flex';

    } else if (int_option === 2 && int_view === 2) {

        obj_box_label.innerHTML = 'Chemicals and Gases';
        obj_box_message.innerHTML = 'Chemicals and gases are used throughout the chip manufacturing process. Some are native elements, like boron and zinc. Look for them in the periodic table of elements. Others, like hexamethyldisilazane, are compounds made up of several elements.';

        obj_img_activity.classList.remove('graphic_img_silhouette');

        obj_box.style.display = 'flex';

    } else if (int_option === 3 && int_view === 3) {

        obj_box_label.innerHTML = 'Metals';
        obj_box_message.innerHTML = 'Metals, such as aluminum and copper, are used to conduct electricity throughout the microprocessor. Gold is also used to connect the actual chip to its packaging.';

        obj_img_activity.classList.remove('graphic_img_silhouette');

        obj_box.style.display = 'flex';

    } else if (int_option === 4 && int_view === 4) {

        obj_box_label.innerHTML = 'Light';
        obj_box_message.innerHTML = 'Ultraviolet light is used to expose patterns on the layers of the microprocessor. UV light has very short wavelengths and is just beyond the violet end of the visible spectrum.';

        obj_img_activity.classList.remove('graphic_img_silhouette');

        obj_box.style.display = 'flex';

    } else if (int_option === 5 && int_view === 5) {

        obj_box_label.innerHTML = 'Masks';
        obj_box_message.innerHTML = 'Masks are used like stencils in the chip-making process. By covering some parts of the chip and exposing other parts to ultraviolet light, chip makers can create different circuit patterns on each layer of a microprocessor.';

        obj_img_activity.classList.remove('graphic_img_silhouette');

        obj_box.style.display = 'flex';

    }

}

function ingredient_buttom() {

    let obj_box = document.getElementById('box');
    let obj_img_activity = document.getElementById('img_activity');

    bol_disable = false;
    obj_img_activity.classList.add('graphic_img_silhouette');

    if (int_view == 1) {

        int_view = 2;

        obj_box.style.display = 'none';
        obj_img_activity.setAttribute('src','./img/chemicals-and-gases.png');

    } else if (int_view == 2) {

        int_view = 3;

        obj_box.style.display = 'none';
        obj_img_activity.setAttribute('src','./img/metal-bars.png');

    } else if (int_view == 3) {

        int_view = 4;

        obj_box.style.display = 'none';
        obj_img_activity.setAttribute('src','./img/lightbulb.png');

    } else if (int_view == 4) {

        int_view = 5;

        obj_box.style.display = 'none';
        obj_img_activity.setAttribute('src','./img/chip-mask.png');

    } else if (int_view == 5) {

        let obj_overlay = document.getElementById('overlay');

        obj_overlay.style.display = 'flex';

    }

}

function try_again_buttom() {

    let obj_box = document.getElementById('box');
    let obj_box_label = document.getElementById('box_label');
    let obj_box_message = document.getElementById('box_message');
    let obj_img_activity = document.getElementById('img_activity');

    let obj_overlay = document.getElementById('overlay');

    int_view = 1;

    obj_overlay.style.display = 'none';

    obj_box_label.innerHTML = 'Metals';
    obj_box_message.innerHTML = 'Metals, such as aluminum and copper, are used to conduct electricity throughout the microprocessor. Gold is also used to connect the actual chip to its packaging.';

    obj_img_activity.classList.add('graphic_img_silhouette');
    obj_img_activity.setAttribute('src','./img/silicon.png');

    obj_box.style.display = 'none';

} 