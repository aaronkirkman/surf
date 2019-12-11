function untarget() {
	var links = document.getElementsByTagName('a');
	Array.prototype.slice.call(links).forEach(function(anchor, index, arr) {
		if (anchor["target"] == "_blank")
			anchor.removeAttribute("target");
	});
}

window.onload = untarget;
