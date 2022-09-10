let button = document.getElementById("create");

function buttonClickCreate() {
	let title = document.getElementById("title");
	let image = document.getElementById("image");
	let services = document.querySelector(".services");
	services.innerHTML += `<div class="box"><img src=${image.value.toLocaleLowerCase()} width="150" height="150">\n<p>${
		title.value
	}</p>\n<button id="buy" type="button">
	Buy
</button></div>`;
}

function textAreaDelete() {
	let textArea = document.getElementById("textarea");
	textArea.value = "";
}
