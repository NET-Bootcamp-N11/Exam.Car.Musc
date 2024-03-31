let footer = document.querySelector(".site-footer");
let clone = footer.cloneNode(footer);
console.dir(clone.hasChildNodes(footer));

console.log(window.history);

window.moveTo = function () {
	alert("Hello! I am an alert box!!");
};
