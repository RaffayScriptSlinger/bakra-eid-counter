
function updateCountdown(){
    let targetDate = new Date( `june 16 , 2024` )  ;
    let currentDate = new Date();
    let timeDifference = targetDate - currentDate;

    let remainingHours = Math.floor( timeDifference / ( 1000 * 60* 60));
    let remainingDays = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    let remainingSecs= Math.floor(timeDifference / (1000 ));

    document.getElementById(`box1`).innerText = `Remaing Hours ${remainingHours} `;
    document.getElementById(`box2`).innerText = `Remaining Days ${remainingDays} `;
    document.getElementById(`box3`).innerText = `Remaining Secs ${remainingSecs} `;

}
updateCountdown();

setInterval(updateCountdown, 1000);