// TOGGLE BUTTON + SIDE NAVBAR
var sidenavbar = document.getElementById("side-navbar-id");

function showsidenav(){
    sidenavbar.style.left="0%";
}

function closesidenav(){
    sidenavbar.style.left="-50%";
}

// ARROW-UP
function scrollarrow(){
const arrowup = document.getElementById("arrow-up");
const mostwanted = document.getElementById("mostwanted");
const storemostwanted = mostwanted.getBoundingClientRect();

if (storemostwanted.top <= window.innerHeight){
    arrowup.style.display="block";
} else {
    arrowup.style.display = "none";
}
}
window.addEventListener('scroll', scrollarrow);



// NEW ARRIVAL & MOST WANTED
// for shopnow button
function anieffect(){
    var buttons = document.querySelectorAll(".button");
    var newarrival = document.getElementById("newarrival");
    var storenewarrival = newarrival.getBoundingClientRect();
    
        for(var i = 0; i <= buttons.length; i++){
            if(storenewarrival.top <= window.innerHeight){
            buttons[i].style.top="40%";
            buttons[i].style.fontSize="14px";
            buttons[i].style.opacity="1";
        }
    else{
            buttons[i].style.top="140%";
            buttons[i].style.fontSize="1px";
            buttons[i].style.opacity="0";
       }
    }
}
window.addEventListener('scroll',anieffect);



// for add-cart and check icon
function addcheck(clickedElement){
    const parentdiv = clickedElement.parentElement
    const addCart = parentdiv.querySelector(".add-cart")
    const addDone = parentdiv.querySelector(".add-done")

    if(addCart){
        addCart.style.display="none";
    }

    if(addDone){
        addDone.style.display="block";
    }
    
}

// for add-cart and check icon
function addcart(clickedElement){
    var parentdiv = clickedElement.parentElement
    var addCart = parentdiv.querySelector(".add-cart")
    var addDone = parentdiv.querySelector(".add-done")

    if(addDone){
        addDone.style.display="none";
    }

    if(addCart){
        addCart.style.display="block";
    }
}







    