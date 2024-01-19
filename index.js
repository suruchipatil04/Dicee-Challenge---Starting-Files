// This will be generate the Random number and round the value
var RandomNo = Math.floor(Math.random()*6)+1;
// It will concatinate the name of the image with random no
var ImgSource ="images/dice"+RandomNo+".png";
// It will select the image and change the image with the help of image sourse
var myImg =document.querySelectorAll("img")[0];
myImg.setAttribute("src",ImgSource);

var RandomNo2 = Math.floor(Math.random()*6)+1;
var ImgSource2 ="images/dice"+RandomNo2+".png";
var myImg2 =document.querySelectorAll("img")[1];
myImg2.setAttribute("src",ImgSource2);

// It will help to change the heading when one dice value is grater than other
var resultElement = document.querySelector("h1");

if (RandomNo > RandomNo2) {
    resultElement.innerHTML = "Player 1 Win!😊";
} else if (RandomNo < RandomNo2) {
    resultElement.innerHTML = "Player 2 Win!😊";
} else {
    resultElement.innerHTML = "Tie 😕";
}

// if (RandomNo > RandomNo2)
// {
//     document.getElementsByTagName("h1")[0].innerHTML="Player 1st Winned"
// }
// else if (RandomNo < RandomNo2) {
//     document.getElementsByTagName("h1")[0].innerHTML="Player 2st Winned"
// }
// else
// {
//     document.getElementsByTagName("h1")[0].innerHTML="Tie"
// }