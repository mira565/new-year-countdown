dayjs.extend(dayjs_plugin_duration);  //include plugin in library for calendar it allows us to create object with dates

setInterval(createSnowFlake, 50);    //50 ml seconds
 


function createSnowFlake() {
    let snow_flake = document.createElement('i');
    snow_flake.classList.add('fa');
    snow_flake.classList.add('fa-snowflake-o');
    snow_flake.style.left = Math.random() * window.innerWidth + 'px';  //increase the snowflakes within screen
    snow_flake.style.animationDuration = Math.random() * 3 + 6 + 's'; // between 3 - 6 seconds different animataion duration of snow flakes
	snow_flake.style.opacity = Math.random()*0.8 + 0.5;   //changes the opacity of snow-flakes
	snow_flake.style.fontSize = Math.random() * 15 + 10 + 'px';   //changes the size of snow-flakes


    document.body.appendChild(snow_flake);
   

    setTimeout(() => {                                     //remove the snow flakes after 4sec
        snow_flake.remove();
    }, 4000)
}



//countdown calendar

function activateCountdown(element, dateString) {
    const targetDate = dayjs(dateString); //object of dates check  
    // console.log(targetDate);

    element.querySelector(".until__event").textContent = `Until ${ targetDate.format("D MMMM YYYY" ) }`;

    setInterval(() => {
        const now = dayjs();
        const duration =dayjs.duration(targetDate.diff(now));
        // console.log(duration.hour());
if (duration.asMilliseconds() <=0) return;  // условие чтобы небыло отрицательных чисел если нг уже прошел

        element.querySelector(".until__numeric-seconds").textContent = duration.seconds().toString().padStart(2, "0");
        element.querySelector(".until__numeric-minutes").textContent = duration.minutes().toString().padStart(2, "0");
        element.querySelector(".until__numeric-hours").textContent = duration.hours().toString().padStart(2, "0");
        element.querySelector(".until__numeric-days").textContent = duration.days().toString().padStart(2, "0");
    }, 250);
    

}

activateCountdown(document.getElementById("myCountdown"), "2022-12-31");  //activate this countdown till 2022



// music


window.addEventListener ('click', () => {
        document.getElementById("song").play();
        

});



