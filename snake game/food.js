import {onsnake,expandsnake} from './snake.js'
import {randomGridPosition} from './grid.js'
let food=getRandomFoodPosition()
const EXPANSION_RATE=1
 export function update(){
     if(onsnake(food))
     {
         expandsnake(EXPANSION_RATE)
         food=getRandomFoodPosition()

 }
}




export function draw(gameBoard){
    
        const foodElement=document.createElement('div')
        foodElement.style.gridRowStart=food.y
        foodElement.style.gridColumnEnd=food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    }
function getRandomFoodPosition(){
    let newFoodPosition
    while(newFoodPosition==null || onsnake(newFoodPosition)){
    newFoodPosition=randomGridPosition()
}
return newFoodPosition
}
 