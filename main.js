/*
Get form input working to console
*/

const form = document.getElementById("input-form");

form.addEventListener("submit", function(e){
	e.preventDefault();

	const projectName = document.getElementById("project-name").value;
	const instrumentName = document.getElementById("instrument-name").value;

	this.reset();

})
