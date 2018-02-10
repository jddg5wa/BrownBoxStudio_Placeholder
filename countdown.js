// Set the date we're counting down to
var countDownDate = new Date("Apr 22, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

// Get todays date and time
var now = new Date().getTime();

// Find the distance between now an the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="countdown_numbers"
document.getElementById("countdown_numbers").innerHTML = days + "days " + hours + "hours "
+ minutes + "minutes " + seconds + "seconds ";

document.getElementById("countdown_numbers_color").innerHTML = days + "days " + hours + "hours "
+ minutes + "minutes " + seconds + "seconds ";

// If the count down is finished, write some text 
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown_numbers").innerHTML = "If you see this message then something has gone horribly wrong!<br>Wait here until further notice.";
}
}, 1000);