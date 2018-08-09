//jQueryscript for real time clock
$(document).ready(function () {
    var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September",
        "Oktober", "November", "December"];

    var days = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];

    var currentDate = new Date();
    currentDate.setDate(currentDate.getDate());

    $('#date').html(days[currentDate.getDay()] + " " + currentDate.getDate() + ' ' + months[currentDate.getMonth()] + ' ' + currentDate.getFullYear());

    //Set seconds
    setInterval(function () {
        var seconds = new Date().getSeconds();
        $("#sec").html((seconds < 10 ? "0" : "") + seconds);
    }, 1000);

    //Set minutes
    setInterval(function () {
        var minutes = new Date().getMinutes();
        $("#min").html((minutes < 10 ? "0" : "") + minutes);
    }, 1000);

    //Set hours
    setInterval(function () {
        var hours = new Date().getHours();
        $("#hours").html((hours < 10 ? "0" : "") + hours);
    }, 1000);
    
    //Find user's region
    $.get("https://ipinfo.io", function (response) {
        $("#location").html(response.region);
    }, "jsonp");

    //Days left of the year
    var currentYear = (new Date).getFullYear();
    var start = new Date(currentYear + "-12-31"); //Set dynamic value instead of hardcoded
    var diff = new Date(start - currentDate); //Recycle variable currentDate from row 9
    var days = diff / 1000 / 60 / 60 / 24;
    $("#days-left").html(Math.ceil(days) + " dagar kvar på " + currentYear);
});