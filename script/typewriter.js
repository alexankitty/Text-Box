var speed = 50;
var color;
var size;

class Utilities {
	static sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}
}

async function typeWriter(txt, element) {
  for(let i = 0; i < txt.length; i++) {
    element.innerHTML += txt.charAt(i);
    await Utilities.sleep(speed);
  }
}

function initialize(){
    URLParams = new URLSearchParams(window.location.search);
    color = URLParams.get("color");
    size = URLParams.get("size");
    URLParams.delete("size");
    URLParams.delete("color");
    URLParams.forEach(ParamHandler);
}

function ParamHandler(item, index) {
    const p = document.createElement("p");
    document.getElementById("container").appendChild(p);
    if(color) p.style.color = color;
    if(size) p.style.fontSize = size + "px";
    const txt = item;
    typeWriter(txt, p);
}