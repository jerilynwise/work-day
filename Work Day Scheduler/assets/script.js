//this keep the script from running before the DOM is fully loaded
$(document).ready(function() {


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
    }

    updater();


    //set interval for updater every 5 mins 
    setInterval(updater, 5000);

      
    //dynamically change date using moment
      $(function() {
        var date = new Date()
        $("#currentDay").text(moment().format('dddd, MMMM Do'));
    });


    //bringing every single hour back from local storage. get local storage and bring them into the html so they show.















});

