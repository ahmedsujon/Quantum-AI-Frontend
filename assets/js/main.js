let destination = new Date("Dec 10, 2021 12:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();

    let diff = destination - now;

    let days = Math.floor(diff / (1000*60*60*24));
    let hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
    let minutes = Math.floor((diff % (1000*60*60))/ (1000*60));
    let seconds = Math.floor((diff % (1000*60))/ 1000);

    document.getElementById("timer").innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's'; 
}, 1000)
