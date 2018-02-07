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

	if(localStorage.getItem("Projects") == null){
		projects.push(project);
		localStorage.setItem("Projects", JSON.stringify(projects));
	} else {
		const storageProjects = JSON.parse(localStorage.getItem("Projects"));
		storageProjects.push(project);
		localStorage.setItem("Projects", JSON.stringify(storageProjects));
	}

	this.reset();

})

