//work day date to be displayed
var today_date=moment().format('dddd,Do MMMM YYYY');
$("#currentDay").html(today_date);


$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        //get current number of hours.
        var timeNow = moment().hour();

        // loop over time blocks
        $(".time-block").each(function () {
            var blockTime = parseInt($(this).attr("id").split("hour_")[1])+7; //+7 adds 7 to our id defined hour which starts at 1

            // To check the time and add the classes for background indicators
            if (blockTime < timeNow) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (blockTime === timeNow) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    // get saved scheduled work from local storage
    $("#hour_1 .description").val(localStorage.getItem("hour_1"));
    $("#hour_2 .description").val(localStorage.getItem("hour_2"));
    $("#hour_3 .description").val(localStorage.getItem("hour_3"));
    $("#hour_4 .description").val(localStorage.getItem("hour_4"));
    $("#hour_5 .description").val(localStorage.getItem("hour_5"));
    $("#hour_6 .description").val(localStorage.getItem("hour_6"));
    $("#hour_7 .description").val(localStorage.getItem("hour_7"));
    $("#hour_8 .description").val(localStorage.getItem("hour_8"));
    $("#hour_9 .description").val(localStorage.getItem("hour_9"));
    $("#hour_10 .description").val(localStorage.getItem("hour_10"));

    timeTracker();
})