//Make an Array

const imageArray = [
  {
    name: "love",
    url: "images/love.png",
  },
  {
    name: "funny",
    url: "images/funny.png",
  },
  {
    name: "cold",
    url: "images/cold.png",
  },
  {
    name: "cool",
    url: "images/cool.png",
  },
  {
    name: "crazy",
    url: "images/crazy.png",
  },
  {
    name: "kiss",
    url: "images/kiss.png",
  },
  {
    name: "sad",
    url: "images/sad.png",
  },
  {
    name: "smile",
    url: "images/smile.png",
  },
  {
    name: "love",
    url: "images/love.png",
  },
  {
    name: "funny",
    url: "images/funny.png",
  },
  {
    name: "cold",
    url: "images/cold.png",
  },
  {
    name: "cool",
    url: "images/cool.png",
  },
  {
    name: "crazy",
    url: "images/crazy.png",
  },
  {
    name: "kiss",
    url: "images/kiss.png",
  },
  {
    name: "sad",
    url: "images/sad.png",
  },
  {
    name: "smile",
    url: "images/smile.png",
  },
];

let cardChoosen = [];
let marks = 0;

//to mix the array elements

imageArray.sort(() => 0.5 - Math.random());

//Select the grid

const gridDisplay = document.querySelector("#grid");

//Get the array img with index

function createBoard() {
  imageArray.forEach((img, index) => {
    // console.log(img, index);

    //Create image element (question marks)

    const card = document.createElement("img");
    card.setAttribute("src", "images/question-mark.jpg");

    //creat the dataid

    card.setAttribute("data-id", index);

    //Get the number when click the image

    card.addEventListener("click", flipcard);

    //append the images
    gridDisplay.appendChild(card);
  });
}
createBoard();

console.log(imageArray)

function flipcard() {
  const cardId = this.getAttribute("data-id");

//   console.log(imageArray[cardId]);

  this.setAttribute("src", imageArray[cardId].url);
  cardChoosen.push({...imageArray[cardId], id: cardId});
  if (cardChoosen.length === 2) {
    setTimeout(checkMath,500);
  }

  
}
function checkMath(){
console.log(cardChoosen)
    const optionOne = cardChoosen[0];
    const optionTwo = cardChoosen[1];

    const allCards = document.querySelectorAll('img');

    if(optionOne.name === optionTwo.name){
      
        allCards[optionOne.id].src = 'images/right.webp';
        allCards[optionTwo.id].src = 'images/right.webp';

        marks = marks + 100 / 8;
    }else{

        allCards[optionOne.id].src = 'images/question-mark.jpg';
        allCards[optionTwo.id].src = 'images/question-mark.jpg';

    }

cardChoosen = [];
displayMarks();
}

function displayMarks(){

    const finalMarks = Math.round(marks) + '%';
    const marksH3 = document.getElementById('marks');
    marksH3.innerText = finalMarks;
}