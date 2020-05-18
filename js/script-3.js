$(document).ready(function() {
    $(".my-progress-bar-3").circularProgress_c({
        line_width: 2,
        color: "#0cb9be",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage_c: true,
        text: ""
    }).circularProgress_c('animate', 84, 5000);
});
