const trex = document.getElementById("trex");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    sakramoq();
});

function sakramoq () {
    if (trex.classList != "sakramoq") {
    trex.classList.add("sakramoq") 
}
setTimeout(function() {
    trex.classList.remove("sakramoq")
},   300)
}

let isalive = setInterval (function() {
    let trextop = parseInt(window.getComputedStyle(trex).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    if(cactusleft < 50 && cactusleft > 0 && trextop >= 140) {
        alert("yana 0 dan ")
    }
}, 10)