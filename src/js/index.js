function showPopup(id) {
    let elements = document.getElementsByClassName("show");
    let popup = document.getElementById(id);
    if (elements[0] && elements[0]!=popup) {
        elements[0].classList.remove("show");
    }
    
    popup.classList.toggle("show");
}
