$(document).ready(function() {
    $(".my-progress-bar-2").circularProgress_b({
        line_width: 2,
        color: "#0cb9be",
        starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
        percent: 0, // percent starts from
        percentage_b: true,
        text: ""
    }).circularProgress_b('animate', 95, 5000);
});
