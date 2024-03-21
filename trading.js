// picking up HTML elements
const foodInput = document.getElementById('food');
const woodInput = document.getElementById('wood');
const goldInput = document.getElementById('gold');
const stoneInput = document.getElementById('stone');

const submitBtn = document.getElementById('submitBtn');
// resource inputs
const myFood = document.getElementById('myFood');
const myWood = document.getElementById('myWood');
const myGold = document.getElementById('myGold');
const myStone = document.getElementById('myStone');
// UI showing actual resources
const myFoodUI = document.getElementById('myFoodUI');
const myWoodUI = document.getElementById('myWoodUI');
const myGoldUI = document.getElementById('myGoldUI');
const myStoneUI = document.getElementById('myStoneUI');

myFoodUI.innerHTML = "0";
myWoodUI.innerHTML = "0";
myGoldUI.innerHTML = "0";
myStoneUI.innerHTML = "0";


// SubmitBtn
submitBtn.addEventListener('click', submitResources());

function submitResources () {
    myFoodUI.innerHTML = foodInput.textContent;
}