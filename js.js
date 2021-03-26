
let elem = document.getElementById("navi");
let color = 0;
setInterval(function () {
    color += 1 % 360;
    elem.style.color = "hsl(" + color + ", 100%, 50% )";
}, 50);

function Tooltip() {
    this.tooltip = document.createElement("div");
    this.tooltip.style.visibility = "hidden";
    this.tooltip.style.position = "absolute";
    this.tooltip.className = "tooltip";
}
Tooltip.prototype.show = function (text, x, y) {
    this.tooltip.innerHTML = text;
    this.tooltip.style.visibility = "visible";
    this.tooltip.style.left = x + "px";
    this.tooltip.style.top = y + "px";

    if (this.tooltip.parentNode != document.body) {
        document.body.appendChild(this.tooltip);
    }
}
Tooltip.prototype.hide = function () {
    this.tooltip.style.visibility = "hidden";
}
window.addEventListener("load", function () {
    let p = document.getElementsByTagName("p");
    for (let i = 0; i < p.length; i++) {
        p[i].addEventListener("mousemove", moveHandler);
        p[i].addEventListener("mouseout", outHandler);
    }
    let span = document.getElementsByTagName("span");
    for (let i = 0; i < span.length; i++) {
        span[i].addEventListener("mousemove", moveHandler);
        span[i].addEventListener("mouseout", outHandler);
    }
})

let k = new Tooltip();

function moveHandler(e) {

    document.body.scrollTop
    if (!e) e = window.event;
    console.log(e);
    k.show("This is text", e.clientX + 20, e.pageY + 20);
}

function outHandler() {
    k.hide();
}

