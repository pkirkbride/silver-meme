const citySubmit = document.querySelector('.citySubmit');
const cityField = document.querySelector('.cityField');

function learnGerman() {
    let viewerName = prompt("What's your name?", "Traveler");
        if (viewerName !== null) {
            document.getElementById("intro").innerHTML = "Guten tag, <strong>" + viewerName + "</strong>! Now you know how to say hello in German!" 
        } else {
            alert("I respect your privacy.");
        }
    }

function checkCity() {
    let userEntry = cityField.value;
    if (userEntry.toLowerCase() == "paris") {
        if (confirm("Do you want to go to the Paris page?") == true) {
                window.location="paris.html";
            }
    } else if (userEntry.toLowerCase() == "berlin") {
        if (confirm("Do you want to go to the Berlin page?") == true) {
                window.location="berlin.html";
            }
    } else if (userEntry.toLowerCase() == "kyoto") {
        alert("The Kyoto site is still under construction. Please enter a different city.");
    } else {
        alert("Are you sure you spelled that right? If so, we are still working on a page for that city. Please enter a different city.");
    }
}

citySubmit.addEventListener('click', checkCity);

function displayHotel() {
    document.getElementById("article1").style.display = "revert";
    document.getElementById("article2").style.display = "none";
    document.getElementById("article3").style.display = "none";
    }
function displaySights() {
    document.getElementById("article2").style.display = "revert";
    document.getElementById("article1").style.display = "none";
    document.getElementById("article3").style.display = "none";
    }
function displayRestaurant() {
    document.getElementById('article3').style.display = "revert";
    document.getElementById("article1").style.display = "none";
    document.getElementById("article2").style.display = "none";
    }