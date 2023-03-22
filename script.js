const btn = document.querySelector(".button");
const colorEl = document.querySelector(".generated-color");

const color = ["green", "blue", "yellow", "red"];

// Getting randon number from 0 to 3
function getRandomNumber() {
    return Math.floor(Math.random() * color.length);
}
    

if (localStorage.getItem("buttonClicked")) {
    // Disabling the 'button' if the user already clicked before
    btn.disabled = true;
} else{
    //    Click event for desktop or clicking device
    btn.addEventListener("click", ()=> {

        // Disabling the 'button' to allow only one touch
         btn.disabled = true;

        // Using the random number to loop through the 'color' array
        const randomNumber = getRandomNumber();
        colorEl.style.backgroundColor = color[randomNumber];
        colorEl.textContent = color[randomNumber];

        // Allowing click event since the user has not done that before
        localStorage.setItem("buttonClicked", true);
    })
        
    // Touch event for mobile or any touch device
    btn.addEventListener("touchstart", function() {
            
        // Disabling the 'button' to allow only one touch
        btn.disabled = true;
            
        // Using the random number to loop through the 'color' array
        const randomNumber = getRandomNumber();
        colorEl.style.backgroundColor = color[randomNumber];
        colorEl.textContent = color[randomNumber];
            
        // Allowing click event since the user has not done that before
        localStorage.setItem("buttonClicked", true);
    });

}




// //    Click event for desktop or clicking device
// btn.addEventListener("click", ()=> {
//     // Disabling the 'button' to allow only one click
//     btn.disabled = true;
//     // Using the random number to loop through the 'color' array
//     const randomNumber = getRandomNumber();
//     colorEl.style.backgroundColor = color[randomNumber];
//     colorEl.textContent = color[randomNumber];
// })

// // Touch event for mobile or any touch device
// btn.addEventListener("touchstart", function() {
//     // Disabling the 'button' to allow only one touch
//     btn.disabled = true;
//     // Using the random number to loop through the 'color' array
//     const randomNumber = getRandomNumber();
//     colorEl.style.backgroundColor = color[randomNumber];
//     colorEl.textContent = color[randomNumber];
// });