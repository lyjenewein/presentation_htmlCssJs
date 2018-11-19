


//slide-5 picture throw in



function addGo() {
    let element = document.getElementById("mark1");
    element.classList.add("go");
}


function fadeIn() {
    let element = document.getElementById("slide-1");
    element.classList.add("go");
}

function flyUfo() {
  document.getElementById("ufo").style.animation = "fly 12s ease";
  document.getElementById("disappear").classList.add('disappear-animation');
  document.getElementById("light").classList.add('blink-animation');
}

function pictureThrow(counter = 1){
    let picture = document.getElementsByClassName("mark" + counter);
    if (picture[0].classList.contains("picture-animation")){
        let new_counter = counter + 1;
		pictureThrow(new_counter);
    } else {
        picture[0].classList.add("picture-animation");
    }
}
