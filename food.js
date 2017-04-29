var main = document.getElementById("products");
var dataRequest = new XMLHttpRequest();

dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFail);

function dataRequestComplete(event){
	var data = JSON.parse(event.target.responseText);
	showData(data);
}

function dataRequestFail (event){
	alert("request failed");
}


function showData(object) { //being called from above...
	var DOM = "";
	var dog_brandsArray;
	var brandNameObject;
	console.log("data", object.dog_brands);
	//array			//object
	dog_brandsArray = object.dog_brands;
	for (var i = 0; i < dog_brandsArray.length; i++) {
		brandNameObject = dog_brandsArray[i];
		console.log(brandNameObject);
		for (var j = 0; j < dog_brandsArray[i].types.length; j++) {
			console.log(dog_brandsArray[i].types[j]);
			for(var k = 0; k < dog_brandsArray[i].types[j].volumes.length; k++) {
				console.log(dog_brandsArray[i].types[j].volumes[k]);
				DOM += "<p>" + brandNameObject.name + "</p>";
				DOM += "<p>" + dog_brandsArray[i].types[j].type + "</p>";
				DOM += "<p>" + dog_brandsArray[i].types[j].volumes[k].name + "</p>";
				DOM += "<p>" + dog_brandsArray[i].types[j].volumes[k].price + "</p>";
			}
		}
	}
	products.innerHTML += DOM
}
dataRequest.open("GET", "food.json");
dataRequest.send();



/////////////////////////////////////////////START WITH CATS
var catFood = document.getElementById("catFood");
var dataRequest2 = new XMLHttpRequest();

dataRequest2.addEventListener("load", dataRequest2Complete);
dataRequest2.addEventListener("error", dataRequest2Fail);


function dataRequest2Complete(event){
	var catData = JSON.parse(event.target.responseText);
	showCatData(catData);
}

function dataRequest2Fail (event){
	alert("request failed");
}

function showCatData(catdata) {
	var table = ""
	cat_brandsArray = catdata.cat_brands;
	for(var i = 0; i < cat_brandsArray.length; i++) {
		console.log("catBrandNames", cat_brandsArray[i].name);
		for (var j = 0; j < cat_brandsArray[i].breeds.length; j++) {
			console.log("catBreeds", cat_brandsArray[i].breeds[j])
			for (var k = 0; k < cat_brandsArray[i].types.length; k++) {
				console.log("catTypes", cat_brandsArray[i].types[k]);
				for (var h = 0; h < cat_brandsArray[i].types[k].volumes.length; h++) {
					console.log("volumes", cat_brandsArray[i].types[k].volumes[h]);
				var catFood = document.getElementById("catFood");
				table += "<h3>" + cat_brandsArray[i].name + "</h3>";
				table += "<h4>" + cat_brandsArray[i].breeds[j] + "</h4>";
				table += "<h5>" + cat_brandsArray[i].types[k] + "</h5>";
				table += "<h5>" + cat_brandsArray[i].types[k].type + "</h5>";
				table += "<h5>" + cat_brandsArray[i].types[k].volumes[h].name + "</h5>";table += "<h5>" + cat_brandsArray[i].types[k].volumes[h].price + "</h5>";



				}
			}
		}
	}

 	catFood.innerHTML += table;
	}
dataRequest2.open("GET", "cats.json");
dataRequest2.send();








