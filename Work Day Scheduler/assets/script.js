//this keep the script from running before the DOM is fully loaded
$(document).ready(function() {

      //dynamically change date using moment
      $(function() {
        var date = new Date()
        $("#currentDay").text(moment().format('dddd, MMMM Do'));
    });


    //save description and hour to local storage
    $(".saveBtn").on("click", function() {
        let value = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem(time,value);
    });
    

    //hour updater
    function updater () {
        let currentTime = moment().hours();
        $(".time-block").each(function(){
            let hour = parseInt($(this).attr("id").split("-")[1]);
            if (hour<currentTime){
                $(this).addClass("past");
            }else if (hour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        });
    };



    //set interval for updater every 5 mins 
    setInterval(updater, 5000);

      


    //bringing every single hour back from local storage. get local storage and bring them into the html so they show.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));


    //run updater function to change the coloring based off time
    updater();

});

