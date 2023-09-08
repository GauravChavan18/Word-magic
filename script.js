let inputText = document.querySelector(".input-text")
let displayDiv = document.querySelector(".display")

inputText.addEventListener("input", updatevalue)
let text = "";
function reset() {
    displayDiv.style.textDecoration = "none";
}
function updatevalue(e) {
    text = e.target.value;
    displayDiv.innerHTML = e.target.value;
    reset();
}

function makeuppercase() {

    displayDiv.innerHTML = text.toUpperCase();
    displayDiv.style.fontSize = "25px"
    reset();
}

function makelowercase() {
    displayDiv.innerHTML = text.toLowerCase();
    reset();
}

function firstCapital() {
    displayDiv.innerHTML = text.charAt(0).toUpperCase() + text.substring(1, text.length)
    reset();
}

function makebold() {
    displayDiv.innerHTML = text.bold();
    reset();
}

function makeitalic() {
    displayDiv.innerHTML = text.italics();
    reset();
}

function makeuderline() {
    displayDiv.style.textDecoration = "underline";
}