console.log("Your index.js file is loaded correctly!");



var modal = document.getElementById("bigFlockApp");

var img = document.getElementById("FlockApp");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var modal = document.getElementById("bigMSPparkingApp");

var img = document.getElementById("mspParkingApp");
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}



var modal = document.getElementById("bigNOAA");

var img = document.getElementById("NOAA");
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption");

img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];


span.onclick = function() { 
  modal.style.display = "none";
}
