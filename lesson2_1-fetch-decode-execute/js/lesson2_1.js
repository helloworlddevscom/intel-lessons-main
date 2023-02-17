var int_marker_current = 3;


function onLoad(int_marker) {

    const obj_video = document.getElementById('video_intro');

    obj_video.addEventListener('ended', (event) => {

        let obj_video_intro = document.getElementById('video_intro');
        let obj_video_main = document.getElementById('video_main');

        obj_video_intro.style.display = 'none';
        obj_video_main.play();

    });

}

function showbox(obj) {
    let boxes = document.getElementsByTagName('infobox');
    for (var i = boxes.length - 1; i >= 0; i--) {
        for (var j = boxes[i].children.length - 1; j >= 0; j--) {
            boxes[i].children[j].classList.add('hide');
        }
     } 
    document.getElementById(obj).children[0].classList.remove('hide');
}

function set_marker(int_marker) {

    let obj_video_main = document.getElementById('video_main');
    let obj_video_intro = document.getElementById('video_intro');

    let obj_marker_1 = document.getElementById('marker_1');
    let obj_marker_2 = document.getElementById('marker_2');
    let obj_marker_3 = document.getElementById('marker_3');
    let obj_marker_4 = document.getElementById('marker_4');
    let obj_marker_5 = document.getElementById('marker_5');

    obj_marker_1.classList.remove('marker_selected');
    obj_marker_2.classList.remove('marker_selected');
    obj_marker_3.classList.remove('marker_selected');
    obj_marker_4.classList.remove('marker_selected');
    obj_marker_5.classList.remove('marker_selected');

    obj_marker_1.classList.add('marker_not_selected');
    obj_marker_2.classList.add('marker_not_selected');
    obj_marker_3.classList.add('marker_not_selected');
    obj_marker_4.classList.add('marker_not_selected');
    obj_marker_5.classList.add('marker_not_selected');

    int_marker_current = int_marker;

    if (int_marker == 1) {

        obj_marker_1.classList.remove('marker_not_selected');
        obj_marker_1.classList.add('marker_selected');

        obj_video_main.playbackRate = 0.25;
        obj_video_intro.playbackRate = 0.25;

    } else if (int_marker == 2) {

        obj_marker_2.classList.remove('marker_not_selected');
        obj_marker_2.classList.add('marker_selected');

        obj_video_main.playbackRate = 0.50;
        obj_video_intro.playbackRate = 0.50;

    } else if (int_marker == 3) {

        obj_marker_3.classList.remove('marker_not_selected');
        obj_marker_3.classList.add('marker_selected');

        obj_video_main.playbackRate = 1;
        obj_video_intro.playbackRate = 1;

    } else if (int_marker == 4) {

        obj_marker_4.classList.remove('marker_not_selected');
        obj_marker_4.classList.add('marker_selected');

        obj_video_main.playbackRate = 1.50;
        obj_video_intro.playbackRate = 1.50;

    } else if (int_marker == 5) {

        obj_marker_5.classList.remove('marker_not_selected');
        obj_marker_5.classList.add('marker_selected');

        obj_video_main.playbackRate = 2;
        obj_video_intro.playbackRate = 2;

    }

}

function set_slower() {
    
    if (int_marker_current == 1) {return;}

    int_marker_current--;

    set_marker(int_marker_current);

}

function set_faster() {

    if (int_marker_current == 5) {return;}

    int_marker_current++;

    set_marker(int_marker_current);

}