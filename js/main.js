const citySubmit = document.querySelector('.citySubmit')
const cityField = document.querySelector('.cityField')

function checkCity() {
    let userEntry = cityField.value;
    if (userEntry == "Paris") {
        if (confirm("Do you want to go to the Paris page?") == true) {
                window.location="paris.html"
            }
    } else if (userEntry == "Berlin") {
        if (confirm("Do you want to go to the Berlin page?") == true) {
                window.location="berlin.html"
        }
    } else if (userEntry == "Kyoto") {
        alert("The Kyoto site is still under construction. Please enter a different city.")
    } else {
        alert("Are you sure you spelled that right? If so, we are still working on a page for that city. Please select a different city.")
    }
}
citySubmit.addEventListener('click', checkCity)