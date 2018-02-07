/*
Get form input working to console
*/

const form = document.getElementById("input-form");

form.addEventListener("submit", function(e){
	e.preventDefault();

	const projectName = document.getElementById("project-name").value;
	const instrumentName = document.getElementById("instrument-name").value;

	const project = {
		projectName: projectName,
		instrumentName: instrumentName
	};

	const projects = [];

	projects.push(project);

	localStorage.setItem("Projects", JSON.stringify(projects));

	this.reset();

})


/*project = {
	projectName: projectName,
	instrumentName: instrumentName
} */

//localStorage.setItem("Projects", object)
