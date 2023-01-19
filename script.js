const signUpButton = document.getElementById('signup');
const signInButton = document.getElementById('signin');
const container = document.getElementById('container');

document.getElementById("signin").addEventListener("click", function(){
    document.querySelector(".container").classList.remove("right-panel-active");
});

document.getElementById("signup").addEventListener("click", function(){
    document.querySelector(".container").classList.add("right-panel-active");
});



// signUpButton.addEventListener('click', () => {
//     container.classList.add("right-panel-active");
// });

// signInButton.addEventListener('click', () => {
//     container.classList.remove("right-panel-active");
// });

