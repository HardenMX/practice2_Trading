// Resource inputs
const foodInput = document.getElementById('food');
const woodInput = document.getElementById('wood');
const goldInput = document.getElementById('gold');
const stoneInput = document.getElementById('stone');

const submitBtn = document.getElementById('submitBtn');
// My Resources
const myFood = document.getElementById('myFood');
const myWood = document.getElementById('myWood');
const myGold = document.getElementById('myGold');
const myStone = document.getElementById('myStone');
// UI showing actual resources
const myFoodUI = document.getElementById('myFoodUI');
const myWoodUI = document.getElementById('myWoodUI');
const myGoldUI = document.getElementById('myGoldUI');
const myStoneUI = document.getElementById('myStoneUI');
// Items
//const itemsToBuy = document.getElementById('itemsToBuy');
myFoodUI.innerHTML = "0";
myWoodUI.innerHTML = "0";
myGoldUI.innerHTML = "0";
myStoneUI.innerHTML = "0";

const tradingAmount = document.getElementById('tradingAmount');
const buyBtn = document.getElementById('buyBtn');
const sellBtn = document.getElementById('sellBtn');
const resourceSelected = document.getElementById('resourceSelect');

// SubmitBtn 
submitBtn.addEventListener('click', submitResources);

function submitResources () {
    myFoodUI.innerHTML = foodInput.value;
    myWoodUI.innerHTML = woodInput.value;
    myGoldUI.innerHTML = goldInput.value;
    myStoneUI.innerHTML = stoneInput.value;
    clearInputs();
}
function clearInputs () {
    foodInput.value = null;
    woodInput.value = null;
    goldInput.value = null;
    stoneInput.value = null;
}

//TRADING LOGIC
buyBtn.addEventListener('click', buy);
sellBtn.addEventListener('click', sell);

function buy (tradingAmount, resourceSelected) {
    switch (tradingAmount.value)
    {
        case "food": () => {}
        break;
        case "wood": () => {}
        break;
        case "gold": () => {}
        break;
        case "stone": () => {}
        break;
    }
}
function sell () {
    
}