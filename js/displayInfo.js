function displayHotel() {
    document.getElementById("article1").style.display = "revert"
    document.getElementById("article2").style.display = "none"
    document.getElementById("article3").style.display = "none"
}
function displaySights() {
    document.getElementById("article2").style.display = "revert"
    document.getElementById("article1").style.display = "none"
    document.getElementById("article3").style.display = "none"
}
function displayRestaurant() {
    document.getElementById("article3").style.display = "revert"
    document.getElementById("article1").style.display = "none"
    document.getElementById("article2").style.display = "none"
}