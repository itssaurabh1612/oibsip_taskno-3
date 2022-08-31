let myForm = document.getElementById("myForm");
let myInput = document.getElementById("myInput");
let myList = document.getElementById("myList");
myForm.addEventListener("submit", (data) => {
	data.preventDefault();
	createItem(myInput.value);
});
createItem = (d) => {
	let myTemplate = `<h4>${d}<button onclick="deleteItem(this)">DELETE</button></h4>`;
	myList.insertAdjacentHTML("beforeend", myTemplate);
	myInput.value = "";
	myInput.focus();
};

function deleteItem(x) {
	x.parentElement.remove();
}
