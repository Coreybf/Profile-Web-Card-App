


const name = "John Doe";
const age = 28;
const occupation = "Web Developer";
const bio = "Passionate about coding and teaching others";
const profilePicture = "profile.png";


const profileContainer = document.getElementById("profile-container");
const profileCard = 
    '<div class = "card">' + '<img src ="' + profilePicture + '" alt ="Profile Picture">' +
    '<h2>' + name + '</h2>' +
    '<p>Age:' + age + '</p>' +
    '<p>Occupation: '+ occupation + '</p>' +
    '<p>' + bio + '</p>' +
    '</div>';


profileContainer.innerHTML = profileCard;

