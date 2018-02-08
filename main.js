const projectNameForm = document.getElementById("project-name-input-form");
const instrumentNameForm = document.getElementById("instrument-input-form");
const projectDetail = document.querySelector(".project-detail");
const ul = document.querySelector("ul");
const doneBtn = document.querySelector("#done-btn");
const clearBtn = document.querySelector("#clear-btn");

const finalObj = {};
const instrumentList = [];

projectNameForm.addEventListener("submit", function(e){
	e.preventDefault();

	const projectName = document.getElementById("project-name").value;

	finalObj.projectName = projectName;

	this.reset();

})

instrumentNameForm.addEventListener("submit", function(e){
	e.preventDefault();

	let instrumentName = document.getElementById("instrument-name").value;

	if(!instrumentList.includes(instrumentName)){
		instrumentList.push(instrumentName);
	} 

	finalObj.instrumentList = instrumentList;


	this.reset();
})

doneBtn.addEventListener("click", function(){
	localStorage.setItem("Projects", JSON.stringify(finalObj));

	var parsed = JSON.parse(localStorage.getItem("Projects"));

	const h3 = document.createElement("h3");

	h3.textContent = parsed.projectName;
	projectDetail.appendChild(h3);

	// console.log(parsed)
	parsed.instrumentList.forEach(instrument => {
		let li = document.createElement("li");
		li.textContent = instrument;
		ul.appendChild(li);
	})


})

clearBtn.addEventListener("click", function(){
	localStorage.clear();
})

// function grabProject(){

// 	var parsed = JSON.parse(localStorage.getItem("Projects"));
// 	console.log(parsed)
// }
	

/*

// const h3 = document.createElement("h3");

// h3.textContent = projectName;
// projectDetail.appendChild(h3);

// localStorage.setItem("Projects", JSON.stringify(projectName));


// let li = document.createElement("li");
// li.textContent = instrumentName;
// ul.appendChild(li);

// localStorage.setItem("Projects", JSON.stringify(instrumentList));

*/


// Problem: Each time I input an instrument, the forEach loop
// creates lis for everything in the Array

//How can I only create an li for an element that hasn't already been created?



// const project = {
// 	projectName: projectName,
// 	instrumentList: instrumentList
// };

// const projects = [];

// if(localStorage.getItem("Projects") == null){
// 	projects.push(project);
// 	localStorage.setItem("Projects", JSON.stringify(projects));
// } else {
// 	const storageProjects = JSON.parse(localStorage.getItem("Projects"));
// 	storageProjects.push(project);
// 	localStorage.setItem("Projects", JSON.stringify(storageProjects));
// }


/* Need to be able to add more than one instrument */
