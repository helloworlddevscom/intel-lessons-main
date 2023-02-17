var str_filesize = '';
var int_bitsize = 1024;
var arr_speed_time = [];

function set_number(int_number) {

    let obj_filesize = document.getElementsByTagName('file-size-numbers');

    if (str_filesize.length >= 9) {return;}

    if (int_number == '.' && str_filesize == '') {
        str_filesize = '0'
    }

    str_filesize = '' + str_filesize + int_number

    obj_filesize[0].innerHTML = str_filesize;

    console.log('str_filesize.length =', str_filesize.length);

}

function set_clear() {

    let obj_filesize = document.getElementsByTagName('file-size-numbers');

    str_filesize = '';
    obj_filesize[0].innerHTML = '';

    document.getElementsByTagName('speed-50mb-hour')[0].innerHTML = '0';
    document.getElementsByTagName('speed-50mb-minute')[0].innerHTML = '0';
    document.getElementsByTagName('speed-50mb-second')[0].innerHTML = '0';

    document.getElementsByTagName('speed-100mb-hour')[0].innerHTML = '0';
    document.getElementsByTagName('speed-100mb-minute')[0].innerHTML = '0';
    document.getElementsByTagName('speed-100mb-second')[0].innerHTML = '0';

    document.getElementsByTagName('speed-200mb-hour')[0].innerHTML = '0';
    document.getElementsByTagName('speed-200mb-minute')[0].innerHTML = '0';
    document.getElementsByTagName('speed-200mb-second')[0].innerHTML = '0';

    document.getElementsByTagName('speed-500mb-hour')[0].innerHTML = '0';
    document.getElementsByTagName('speed-500mb-minute')[0].innerHTML = '0';
    document.getElementsByTagName('speed-500mb-second')[0].innerHTML = '0';

    document.getElementsByTagName('speed-1gb-hour')[0].innerHTML = '0';
    document.getElementsByTagName('speed-1gb-minute')[0].innerHTML = '0';
    document.getElementsByTagName('speed-1gb-second')[0].innerHTML = '0';

}

function set_mb() {
    int_bitsize = 1024;
    let replace = document.getElementById('img_activity');
    replace.src = 'img/intenet-download-calculator-mb.png';
}

function set_gb() {

    int_bitsize = 1048576;
    let replace = document.getElementById('img_activity');
    replace.src = 'img/intenet-download-calculator-gb.png';

}

function set_calc() {

    let arr_bandwidth = [];
    arr_bandwidth[0] = "50000000";
    arr_bandwidth[1] = "100000000";
    arr_bandwidth[2] = "200000000";
    arr_bandwidth[3] = "500000000";
    arr_bandwidth[4] = "1000000000";

    let obj_filesize = document.getElementsByTagName('file-size-numbers');
    let int_filesize = parseFloat(obj_filesize[0].innerHTML);

    if (!int_filesize) {

        set_clear();
        
        return;

    }

    for (let int = 0; int < arr_bandwidth.length; int++) {

        let int_filetime = (((int_bitsize * int_filesize)*1024)*8) / arr_bandwidth[int];
        
        let int_hourmod = int_filetime % 3600;
        let int_hour = Math.floor(int_filetime / 3600);
        let int_minute = Math.floor(int_hourmod / 60);
        let int_second = Math.floor(int_filetime % 60);
        
        arr_speed_time[int] = [];
        arr_speed_time[int]['hour'] = int_hour;
        arr_speed_time[int]['minute'] = int_minute;
        arr_speed_time[int]['second'] = int_second;
        
    }

    document.getElementsByTagName('speed-50mb-hour')[0].innerHTML = arr_speed_time[0]['hour'];
    document.getElementsByTagName('speed-50mb-minute')[0].innerHTML = arr_speed_time[0]['minute'];
    document.getElementsByTagName('speed-50mb-second')[0].innerHTML = arr_speed_time[0]['second'];

    document.getElementsByTagName('speed-100mb-hour')[0].innerHTML = arr_speed_time[1]['hour'];
    document.getElementsByTagName('speed-100mb-minute')[0].innerHTML = arr_speed_time[1]['minute'];
    document.getElementsByTagName('speed-100mb-second')[0].innerHTML = arr_speed_time[1]['second'];

    document.getElementsByTagName('speed-200mb-hour')[0].innerHTML = arr_speed_time[2]['hour'];
    document.getElementsByTagName('speed-200mb-minute')[0].innerHTML = arr_speed_time[2]['minute'];
    document.getElementsByTagName('speed-200mb-second')[0].innerHTML = arr_speed_time[2]['second'];

    document.getElementsByTagName('speed-500mb-hour')[0].innerHTML = arr_speed_time[3]['hour'];
    document.getElementsByTagName('speed-500mb-minute')[0].innerHTML = arr_speed_time[3]['minute'];
    document.getElementsByTagName('speed-500mb-second')[0].innerHTML = arr_speed_time[3]['second'];

    document.getElementsByTagName('speed-1gb-hour')[0].innerHTML = arr_speed_time[4]['hour'];
    document.getElementsByTagName('speed-1gb-minute')[0].innerHTML = arr_speed_time[4]['minute'];
    document.getElementsByTagName('speed-1gb-second')[0].innerHTML = arr_speed_time[4]['second'];

}