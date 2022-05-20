//this keep the script from running before the DOM is fully loaded
$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        let value = $(this).siblings(".description").val();
        let time = $(this).parent().attr("id");
        localStorage.setItem("time","value");
    });

    //add alert that tells them this happned 



    //hour updater
    function updater () {
        let currentTime = moment().hours();
        $(".time-block").each(function(){
            let hour = parseInt($(this).attr("id").split("-")[1]);
            if (hour<currentTime){
                $(this).addclass("past");
            }else if (hour === currentTime) {
                $(this).removeClass("past");
                $(this).addclass("present");
            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addclass("future");
                
            }
        })
    }















});

