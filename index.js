const profileImage = document.querySelector("#profileImage");
const firstNameSpan = document.querySelector("#firstName");
const ageSpan = document.querySelector("#age");
const statusSpan = document.querySelector("#status");
const btnUpdateProfile =  document.querySelector("#updateBtn");

const isWizard = confirm("Hey you, are you a wizard?");

if(isWizard === true) {
    console.log("Welcome to Hogwarts!");
}
else {
    profileImage.src = "images/image2.jpg";
    firstNameSpan.innerHTML = "Dudley Dursley";
    ageSpan.innerHTML = "12";
    statusSpan.innerHTML = "NON-Wizard";
}

btnUpdateProfile.addEventListener("click", () => {
    console.log("clicked");
    profileImage.src = "images/image3.jpg";
    firstNameSpan.innerHTML = "Chuck Norris";
    ageSpan.innerHTML = "83";
    statusSpan.innerHTML = "Master Joker";  
});