let nameContainer = document.querySelector("#Name"),
	placeContainer = document.querySelector("#place"),
	behanceContainer = document.querySelector("#behance"),
	emailContainer = document.querySelector("#Email"),
	infoContainer = document.querySelector("#P1"),
	getPicById = document.querySelector("#pic");

const xyzButtons = document.querySelectorAll(".button");

const Names = ["Abdal", "XYZ"],
	  Place = ["London, ON ", "Somewhere, ON"],
	  Behance =["Behance.net/Abdshamala", "Behance.net/Xyz"],
	  Email = ["Abdal@gmail.com", "xyz@xyz.xyz"],
	  Infos = ["I'm media studies graduate from American University of Dubai, I love traveling, taking videos and edit them using Adobe Premiere Pro, Big Fan of Los Angeles Lakers", "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum "],
	  Pic = ["images/Abdal-Photo.png", "images/xyz.png"];

function changeInfo(){
	let arrayIndex = this.dataset.arrayref;
	nameContainer.textContent = Names[arrayIndex];
	placeContainer.textContent = Place[arrayIndex];
	behanceContainer.textContent = Behance[arrayIndex];
	emailContainer.textContent = Email[arrayIndex];
	infoContainer.textContent = Infos[arrayIndex];
	getPicById.src = Pic[arrayIndex];
 }

 xyzButtons.forEach(button => button.addEventListener("click", changeInfo));